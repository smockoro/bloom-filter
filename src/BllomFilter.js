import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

class BllomFilter extends Component {
  render() {
    return (
      <div className="BllomFilter">
        <Table>
        <TableHead>
          <TableRow>
            <TableCell numeric>Index</TableCell>
            <TableCell numeric>Bit value</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            {this.props.value.map( (data, i) => {
              return (
                <TableRow key={i}>
                  <TableCell numeric>{i}</TableCell>
                  <TableCell numeric>{data}</TableCell>
                </TableRow>
              )
            })}
        </TableBody>
      </Table>
      </div>
    );
  }
}

export default BllomFilter;
