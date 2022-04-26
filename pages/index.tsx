import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import 'w3-css/w3.css'
import items from './items'
import Modal from '@mui/material/Modal'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import React from 'react'



const boxstyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  height: 400,
  bgcolor: 'background.paper',
  border: 'none',
  boxShadow: 24,
  p: 4,
};

const Home: NextPage = () => {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className={styles.con}>
      <div className={styles.container}>
        <h1 className='w3-center'>AWARDS 2021</h1>
        {
          items.map((item)=>
          <div>
            <br></br>
            <div className={styles.category}>{item.title}</div>
            <br></br>
            <div className='row'>
                {
                item.items.map((subitem)=>
                <div className={styles.cardStyle}>
                    <br></br>
                    <div className='w3-center'><b>{subitem.title.slice(0, 10)}</b></div>
                    <br></br>
                    <img src={subitem.photoUrL} width="100%" height="300px"></img>
                    <br/>
                    <div className='w3-center'><button className={styles.selectbtnStyle}>Select Button</button></div>
                </div>
                )}
            </div>
          </div>
          )}
          <div className={styles.submitBtn}><button className={styles.btnStyle} onClick={handleOpen}>SUBMIT BALLOT <br></br>BUTTON</button></div>
          <Modal
            open={open}
            onClose={handleClose}
          >
            <Box sx={boxstyle}>
              <button className={styles.closebtn} onClick={handleClose}><h1>x</h1></button>
              <br></br>
              <Typography id="modal-modal-title" className='w3-center'>
                SUCCESS
              </Typography>
            </Box>
          </Modal>
      </div>
    </div>
  )
}

export default Home
