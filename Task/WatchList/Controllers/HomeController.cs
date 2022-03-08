using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using WatchList.Data;
using WatchList.Models;

namespace WatchList.Controllers;

public class HomeController : Controller
{
	private readonly ILogger<HomeController> _logger;
	private readonly ApplicationContext _ApplicationContext;

	public HomeController(ILogger<HomeController> logger, ApplicationContext ApplicationContext)
	{
		_ApplicationContext = ApplicationContext;
		_logger = logger;
	}

	public IActionResult Index()
	{
		IEnumerable<Rocket> rocketList = _ApplicationContext.Rockets;
		return View(rocketList);
	}

	public IActionResult WatchList()
	{
		IEnumerable<Rocket> rocketList = _ApplicationContext.Rockets;
		return Ok(rocketList);
	}

    // Home/LaunchList
	public IActionResult LaunchList()
	{
		return View();
	}

	// POST for save interest rocket launch in db 
	[HttpPost]
	public IActionResult LaunchList(Rocket rocket)
	{
		// if request data not valid
		if (!ModelState.IsValid)
		{      
		    return BadRequest();
		}

        // if rocket info exist in db
        if (_ApplicationContext.Rockets.FirstOrDefault(r => r.Name == rocket.Name) != null)
        {
            var result = new ApiResponseError()
            {
                StatusCode = 200, // statuscode is can be other
                ErrorMessage = "Rocket already in watch list."
            };

            // return error data with error message
            return new ObjectResult(result);
        }

        // save rocket info to db
        _ApplicationContext.Rockets.Add(rocket);
        _ApplicationContext.SaveChanges();

        return Ok();
	}
}
