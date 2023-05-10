import React from 'react'
import { TableContainer,TableCell,TableRow,TableHead,TableBody,Table } from '@mui/material'
import { useTheme } from './context/ThemeMode'

const TableData = ({data}) => {
  const {theme} = useTheme()
    const style = {
        color:theme.color,
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

                return(<TableRow>
                    <TableCell style={style}>
                        
                       {i.wpm}
                    </TableCell>
                    <TableCell style={style}>
                       {i.accuracy}
                    </TableCell>
                    <TableCell style={style}>
                      {i.charaters}
                    </TableCell>
                    <TableCell style={style}>
                      {i.timeStamp.toDate().toLocaleString()}
                    </TableCell>
                </TableRow>
                )
              })}
            </TableBody>
        </Table>
        </TableContainer>
    </div>
  )
}

export default TableData