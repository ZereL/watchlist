import React from 'react';
import { Button, Card } from 'react-bootstrap';

function RocketCard({ title, text, btnText, image, onBtnClick }) {
    return (
        <Card className='px-0'>
            <Card.Img variant='top' src={image} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{text}</Card.Text>
                {btnText && onBtnClick && (
                    <Button variant='primary' onClick={onBtnClick}>
                        {btnText}
                    </Button>
                )}
            </Card.Body>
        </Card>
    );
}

export default RocketCard;
