using Microsoft.EntityFrameworkCore;
using WatchList.Data;

var WatchListAllowSpecificOrigins = "_watchListAllowSpecificOrigins";
var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllersWithViews();
builder.Services.AddDbContext<ApplicationContext>(opt => opt.UseInMemoryDatabase(builder.Configuration.GetConnectionString("RocketDb")));
builder.Services.AddCors(options =>
{
	options.AddPolicy(name: WatchListAllowSpecificOrigins,
					  policy =>
					  {
                        policy.AllowAnyHeader().AllowAnyMethod().WithOrigins("http://localhost:3000");
					  });
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
	app.UseExceptionHandler("/Home/Error");
	// The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
	app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();

app.UseCors(WatchListAllowSpecificOrigins);

app.UseAuthorization();

app.MapControllerRoute(
	name: "default",
	pattern: "{controller=Home}/{action=Index}/{id?}");

app.Run();
