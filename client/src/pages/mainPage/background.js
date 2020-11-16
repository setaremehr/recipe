import React from "react";
import Card from "react-bootstrap/Card";
 
function BackImage() {
    return (
        <div>
            <Card
                style={{ width: "10rem", marginLeft: "15px", marginTop: "13px" }}
            >
                <Card.Img
                    variant="top"
                    src="https://img.freepik.com/free-vector/food-lettering-bakery-kitchen-sweets-hot-dogs-badge-organic-food-logo-set_102902-1425.jpg?size=626&ext=jpg"
                />

                <Card.Body>
                    <Card.Title className="font" style={{ fontSize: "32px" }}>FOODY</Card.Title>
                    <Card.Text className="font">
                        Your eating routine is a financial balance. Great sustenance
                        decisions are great speculations
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
                
    )
}
export default BackImage;