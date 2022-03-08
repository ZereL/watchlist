import React, { useEffect, useState } from 'react';
import Navigation from '../../components/Navigation';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import RocketCard from '../../components/RocketCard';
import { fetchWatchList } from '../../services/watchList';

export default function Home() {
    let navigate = useNavigate();

    const [watchList, setWatchList] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const { data } = await fetchWatchList();
            setWatchList(data);
        }

        fetchData();
    }, []);

    const renderWatchList = () => {
        if (!watchList.length) {
            return <p>No Rockets found</p>;
        }

        return watchList.map((item, index) => {
            const { name, description, image } = item;
            return (
                <Col key={index}>
                    <RocketCard title={name} text={description} image={image} />
                </Col>
            );
        });
    };

    return (
        <>
            <Navigation />
            <Container className='py-4'>
                <Row className='mx-0'>
                    <Col />
                    <Button
                        className='my-4'
                        as={Col}
                        variant='primary'
                        onClick={() => {
                            navigate(`/launchlist`);
                        }}
                    >
                        Add
                    </Button>
                    <Col />
                </Row>
                <p>
                    <strong>Below are your interested Rockets</strong>
                </p>
                <Row xs={1} md={2} className='g-4'>
                    {renderWatchList()}
                </Row>
            </Container>
        </>
    );
}
