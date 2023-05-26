import React from "react";
import { Box, Button } from '../UI'
import { lista } from '../../info'
import Card from '../Card/index'

const List = () => {
    return <Box>
        {
            lista.cargos.map( (cargo, i) =>{
                return <Card key={i} cargo={cargo}/>
            })
        }
        <Button>Ver Mas</Button>
    </Box>
}

export default List