import { Button, Box, Typography, Grid, } from "@mui/material"
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';
import SaveIcon from '@mui/icons-material/Save';
import { useState, useEffect } from "react"

export default function Homepage() {

    const [userData, setUserData] = useState({})
    const [isEditing, setIsEditing] = useState(false)

    // fetch user modules
    useEffect(() => {
        const fetchUserModules = async () => {

            try {
                const userModules = await fetch('http://localhost:8000/modules')
                console.log('user modules are: ', userModules)
                const data = await userModules.json()
                console.log('data fetched is: ', data)
                setUserData(data)
            } catch (error) {
                console.log(error)
            }
        }

        fetchUserModules()
    }, [])

    return (
        <Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant='h3'>
                    <strong>My Modules:</strong>
                </Typography>

                <Button variant="outlined" fontSize="small" onClick={() => { setIsEditing(!isEditing) }}>{
                    isEditing ? <SaveIcon /> : <EditIcon />
                }</Button>
            </Box>
            <br />
            <Grid container spacing={2}>
                {
                    Object.keys(userData).map((moduleId) => {
                        return <Grid sx={{
                            background: 'white',
                            padding: '20px',
                            borderRadius: '8px',
                            boxShadow: '0 1px 2px rgba(0,0,0,0.06)',
                            bgcolor: 'background.paper',
                            // Jiggle animation when editing
                            animation: isEditing
                                ? 'jiggle 0.3s ease-in-out infinite'
                                : 'none',
                            '@keyframes jiggle': {
                                '0%': { transform: 'rotate(0deg)' },
                                '25%': { transform: 'rotate(0.1deg)' },
                                '50%': { transform: 'rotate(-0.1deg)' },
                                '75%': { transform: 'rotate(0.1deg)' },
                                '100%': { transform: 'rotate(0deg)' },
                            },
                        }} item size={4} key={moduleId}>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}><Typography variant='h4'>{userData[moduleId].name}</Typography>
                                {
                                    isEditing && <Button><CloseIcon sx={{ color: 'red' }} /></Button>
                                }
                            </Box>
                            <Typography align='left'>{userData[moduleId].description}</Typography>
                        </Grid>
                    })
                }
            </Grid>
        </Box>
    )
}