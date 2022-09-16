import Button from '@components/Button/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function ImgMediaCard({ title = 'Mi Watch I', price = '₹2,499', image = 'https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1601293021.06313819.png?width=200&height=200' }) {
    return (
        <Card sx={{
            maxWidth: 345,
            width: '400',
            borderRadius: '10px',
            border: '1px dotted black',
            '&:hover': {

                boxShadow: '3px 3px 2px 2px black',
            },
        }}
        >
            <CardMedia
                component="img"
                alt="green iguana"
                height="120"
                image={image}
            />
            <CardContent style={{ margin: '20px' }}>
                <hr />
                <Typography gutterBottom variant="body1" component="div">
                    {title}
                </Typography>
                <Typography gutterBottom variant="body1" component="div">
                    {price}
                </Typography>
            </CardContent>
            <CardActions style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Button>Select</Button>
            </CardActions>
        </Card>
    );
}
