import React from 'react'
import { TableContainer,TableCell,TableRow,TableHead,TableBody,Table } from '@mui/material'

const TableData = ({data}) => {
    const style = {
        color:'white',
        textAlign:'center'
    }
  return (
    <div>
        <TableContainer>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell style={style}>
                        WPM
                    </TableCell>
                    <TableCell style={style}>
                        Accuracy
                    </TableCell>
                    <TableCell style={style}>
                        Characters
                    </TableCell>
                    <TableCell style={style}>
                        Date
                    </TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
              {data.map((i)=>{
                <TableRow>
                    <TableCell>
                       {i.wpm}
                    </TableCell>
                    <TableCell>
                       {i.accuracy}
                    </TableCell>
                    <TableCell>
                      {i.charaters}
                    </TableCell>
                    <TableCell>
                      {i.timeStamp.toDate().toLocaleString()}
                    </TableCell>
                </TableRow>
              })}
            </TableBody>
        </Table>
        </TableContainer>
    </div>
  )
}

export default TableData