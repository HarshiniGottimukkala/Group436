import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return(
    <table  align="center" cellpadding="10px">
                <thead>
                    <tr style={{backgroundColor : 'violet'}}>
                        <th rowspan="3" colspan="3">Sort</th>
                        <th rowspan="3" colspan="3">Start Sort</th>
                        <th rowspan="3" colspan="3">End Sort</th>
                        <th colspan="2">SML</th>
                        <th colspan="2">OVH</th>
                        <th colspan="2">NCS</th>
                        <th colspan="2">LP</th>
                        <th colspan="2" rowSpan="3">Prime lenth</th>
                        <th colspan="2" rowSpan="3">Wrap length</th>
                        <th colspan="2" rowSpan="3">Segment lenth</th>
                        <th colspan="2" rowSpan="3">Segment TPUT*</th>


                    </tr>
                    <tr style={{backgroundColor : 'grey'}}>
                        {/* <th colspan="2">Schedule</th> */}
                        <th rowspan="2">GND</th>
                        <th rowspan="2">AIR</th>
                        <th rowspan="2">GND</th>
                        <th rowspan="2">AIR</th>
                        <th rowspan="2">GND</th>
                        <th rowspan="2">AIR</th>
                        <th rowspan="2">GND</th>
                        <th rowspan="2">AIR</th>
                    </tr>
                    {/* <tr>
                        <th rowspan="2">GND</th>
                        <th rowspan="2">AIR</th>
                        <th rowspan="2">GND</th>
                        <th rowspan="2">AIR</th>

                    </tr> */}
                </thead>
                <tbody>
                     <tr style={{backgroundColor : 'lightgrey'}}>
                        <td rowspan="3" colspan="3">Day</td>
                        <td rowspan="1"colspan="3" >7:00AM</td>
                        <td rowspan="1" colspan="3">11:00AM</td>
                        <td rowspan="1">100</td>
                        <td rowspan="1">100</td>
                        <td rowspan="1">100</td>
                        <td rowspan="1">100</td>
                        <td rowspan="1">100</td>
                        <td rowspan="1">100</td>
                        <td rowspan="1">100</td>
                        <td rowspan="1">100</td>
                        <td colspan="2" rowSpan="1">0:00</td>
                        <td colspan="2" rowSpan="1">0:00</td>
                        <td colspan="2" rowSpan="1">2.5 hours - 9:00-11:30</td>
                        <td colspan="2" rowSpan="1">1000076</td>


                    </tr>
                    <tr style={{backgroundColor : 'lightgrey'}}>
                        <td rowspan="1"colspan="3">12:00PM</td>
                        <td rowspan="1"colspan="3">01:00PM</td>
                        <td rowspan="1">200</td>
                        <td rowspan="1">200</td>
                        <td rowspan="1">200</td>
                        <td rowspan="1">200</td>
                        <td rowspan="1">200</td>
                        <td rowspan="1">200</td>
                        <td rowspan="1">200</td>
                        <td rowspan="1">200</td>
                        <td colspan="2" rowSpan="1">0:00</td>
                        <td colspan="2" rowSpan="1">0:00</td>
                        <td colspan="2" rowSpan="1">2.5 hours - 9:00-11:30</td>
                        <td colspan="2" rowSpan="1">1000076</td>

                    </tr>                  
                    <tr style={{backgroundColor : 'lightgrey'}}>
                        <td rowspan="1"colspan="3">12:00PM</td>
                        <td rowspan="1"colspan="3">01:00PM</td>
                        <td rowspan="1">200</td>
                        <td rowspan="1"></td>
                        <td rowspan="1">200</td>
                        <td rowspan="1">200</td>
                        <td rowspan="1">200</td>
                        <td rowspan="1">200</td>
                        <td rowspan="1">200</td>
                        <td rowspan="1">200</td>
                        <td colspan="2" rowSpan="1">0:00</td>
                        <td colspan="2" rowSpan="1">0:00</td>
                        <td colspan="2" rowSpan="1">2.5 hours - 9:00-11:30</td>
                        <td colspan="2" rowSpan="1">1000076</td>

                    </tr> 
                    <tr>
                      <td style={{backgroundColor : 'red'}}>Errors</td>
                      <td colSpan="25">Time gap exceed 30 Minutes</td>
                    </tr>
                    <tr style={{backgroundColor : 'grey'}}>
                      <td colSpan="9">Empty</td>
                      <td rowspan="1">200</td>
                        <td rowspan="1">200</td>
                        <td rowspan="1">200</td>
                        <td rowspan="1">200</td>
                        <td rowspan="1">200</td>
                        <td rowspan="1">200</td>
                        <td rowspan="1">200</td>
                        <td rowspan="1">200</td>
                    </tr>
                    <tr style={{backgroundColor : 'orange'}}>
                        <td colSpan="9">FORECAST - Total must match to proceed</td>
                        <td rowspan="1">200</td>
                        <td rowspan="1">200</td>
                        <td rowspan="1">200</td>
                        <td rowspan="1">200</td>
                        <td rowspan="1">200</td>
                        <td rowspan="1">200</td>
                        <td rowspan="1">200</td>
                        <td rowspan="1">200</td>
                    </tr>
                    <tr style={{backgroundColor : 'black', color: 'white'}}>
                      <td colSpan="3">Gap</td>
                      <td colSpan="3">1 Hour(s)</td>
                      <td colSpan="3"> 30 Min(s)</td>
                    </tr>

                </tbody>

      </table>
      )
}

export default App
