import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import { Input } from '@mui/material';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function TestComponent() {
  const [posts, setPosts] = useState([])

  const getData = () => {
      fetch('http://localhost:8000/api/Products/')    //   , {headers: headers})
         .then((response) => response.json())
         .then((data) => {
            console.log(data);
            setPosts(data);
         })
         .catch((err) => {
            console.log(err.message);
         });
   }

  useEffect(() => {
    getData();
  }, [])

    // console.log(":::Logger:::")
    // useEffect(() => console.log(data[0]));

    function handleBrandChange(id, brand) {
      setPosts(currentPosts => {
        return currentPosts.map(post => {
          if (post.Id === id ) {
            return { 
              ...post, 
              Brand: brand
            }
          }
          return post;
        })
      })
    }

    function handleArticleNumberChange(id, articleNumber) {
      setPosts(currentPosts => {
        return currentPosts.map(post => {
          if (post.Id === id ) {
            return { 
              ...post, 
              ArticleNumber: articleNumber
            }
          }
          return post;
        })
      })
    }

    const submit = (post) => {
      let connectionString = 'http://localhost:8000/api/Products/' + post.Id;
      console.log(connectionString);
      fetch(connectionString, {
        method: 'PUT',
        body: JSON.stringify(
          post
        ),
        headers: {
          'Content-type': 'application/json',
        },
      }).then((response) => response.json()).then((result) => {
        //alert(result)
        getData();
      })
    }
   
    return (
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Id</TableCell>
            <TableCell align="left">ArticleNumber</TableCell>
            <TableCell align="left">Brand</TableCell>
            <TableCell align="left">Action</TableCell>
            <TableCell align="left">Edited Data</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {posts.map((post) => (
            <TableRow
              key={post.Id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="post">
                {post.Id}
              </TableCell>

              <TableCell align="right">
                <TextField id="outlined-basic" label="" variant="outlined" 
                 value={post.ArticleNumber}
                 onChange={(e) => {handleArticleNumberChange(post.Id, e.target.value)}}
                />
              </TableCell>

              <TableCell align="right">
                <TextField id="outlined-basic" label="" variant="outlined" 
                  value={post.Brand}
                  onChange={(e) => {handleBrandChange(post.Id, e.target.value)}}
                />
              </TableCell>
              <TableCell>
                <Button key={post.Id} variant="contained" onClick={() => { submit(post) }}>Update</Button>
              </TableCell>
              <TableCell>
                [{post.Id}, {post.ArticleNumber}, {post.Brand}]
              </TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
      </TableContainer>
    )


}

export default TestComponent;

