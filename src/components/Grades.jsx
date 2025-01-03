import React from 'react'

function Grades() {

    const logData = (e) =>{
        console.log(e.target.textContent);
      
    }




  return (
    // add borders to the table
    <table >
        <thead>
            <tr>
            <th>Subject</th>            
            <th>Mark</th>          
            <th>Grade</th>
            </tr>
        </thead>

        <tbody onClick={logData}>

            <tr>
            <td>Math</td>          
            <td>90</td>
            <td>A</td>
            </tr>

            <tr>
            <td>English</td>
            <td>80</td>
            <td>B</td>
            </tr>

            <tr>
            <td>Science</td>            
            <td >95</td>
            <td>A</td>
            </tr>

            <tr>
            <td>Biology</td>
            <td >90</td>
            <td>A</td>
            </tr>

            <tr>
            <td>Education</td>
            <td >80</td>
            <td>B</td>
            </tr>

            <tr>
            <td>Politics</td>
            <td >95</td>
            <td>A</td>
            </tr>

        </tbody>
    </table>
  )
}

export default Grades