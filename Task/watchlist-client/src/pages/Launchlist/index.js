import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Navigation from '../../components/Navigation';
import RocketCard from '../../components/RocketCard';
import { fetchRocketList } from '../../services/spacex';
import { saveToWatchList } from '../../services/watchList';

export default function Launchlist() {
    const [rocketList, setRocketList] = useState([]);
    let navigate = useNavigate();

    useEffect(() => {
        async function fetchData() {
            const { data } = await fetchRocketList();
            setRocketList(data);
        }

        fetchData();
    }, []);

    const renderLaunchList = () => {
        return rocketList.map((item, index) => {
            const { name, description, flickr_images } = item;
            return (
                <Col key={index}>
                    <RocketCard
                        title={name}
                        text={description}
                        image={flickr_images[0]}
                        btnText={`Add to watchlist`}
                        onBtnClick={async (e) => {
                            // use FormData to reuse the existing api, normall should be json payload data
                            let requestData = new FormData();
                            // build payload data
                            requestData.append('Name', name);
                            requestData.append('Description', description);
                            requestData.append('Image', flickr_images[0]);

                            try {
                                const rst = await saveToWatchList(requestData);
                                // if already exist in watchlist
                                if (rst.data && rst.data.statusCode === 200 && rst.data.errorMessage) {
                                    // display alert
                                    alert(rst.data.errorMessage);
                                } else {
                                    // if added to db successfully redirect to home
                                    navigate(`/`);
                                }
                            } catch (error) {
                                alert('Error save to list');
                                console.log('error', error);
                            }
                        }}
                    />
                </Col>
            );
        });
    };

    return (
        <>
            <Navigation />
            <Container className='py-4'>
                <Row xs={1} md={2} className='g-4'>
                    {renderLaunchList()}
                </Row>
            </Container>
        </>
    );
}
