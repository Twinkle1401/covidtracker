import React from 'react'
import './InfoBox.css';
import {Card, CardContent, Typography} from "@material-ui/core";


function InfoBox({ title, cases, total}) {
    return (
        <div className="infobox_container">
            <Card className="infoBox">
                <CardContent>
                    <Typography className="infoBox_title" color="textSecondary">
                        {title}
                    </Typography>
                    <h2 className="infoBox_cases">{cases}</h2>
                    <Typography className="infoBox_total" color="textSecondary">
                        {total} Total
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}


export default InfoBox;


