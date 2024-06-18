import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function MultiActionAreaCard({nombre,lugar,codigo,imagen}) {
   const navigate=useNavigate();
   
   const navegar=(cod,nombreC)=>{
    const sinEspacios = nombreC.replace(/\s/g, '');
     const   nombre = sinEspacios.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    navigate(`/Organizacion/Concurso/${nombre}/${cod}`);
  }
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={imagen}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {nombre}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {lugar}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button >
          Ver Inscipciones
        </Button>
      </CardActions>
    </Card>
  );
}

// onClick={()=>navegar(codigo,nombre)} size="small" color="primary" style={{color:'#492558'}}