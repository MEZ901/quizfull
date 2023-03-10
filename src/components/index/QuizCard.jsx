import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import defaultImg from '../../assets/defaultImg.png';
import Button from '@mui/material/Button';
import AssignmentIcon from '@mui/icons-material/Assignment';

const QuizCard = (props) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {props.avatar}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={props.name}
        subheader={props.date}
      />
      <CardMedia
        component="img"
        height="194"
        image={defaultImg}
        alt="Quiz Cover"
      />
      <CardContent>
        <Typography variant="h4" color="text.primary" gutterBottom sx={{ fontWeight: 'bold' }}>
          {props.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <Button variant="contained" endIcon={<AssignmentIcon />} style={{flex: 1}}>
          Take the quiz
        </Button>
      </CardActions>
    </Card>
  );
}
export default QuizCard