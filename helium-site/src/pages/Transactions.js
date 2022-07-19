import React from 'react'

const transactions = [
    {
        name: 'name',
        Dues: 'Dues',
        property: 'property Name',
        city: 'Property City',
        state: 'Property State'
    },
    {
        name: 'Robert Deniro',
        Dues: '$1400.96',
        property: 'Buckingham Properties',
        city: 'Rochester',
        state: 'New York'
    },
    {
        name: 'Ken Jeong',
        Dues: '$1287.54',
        property: 'Buckingham Properties',
        city: 'West Henrietta',
        state: 'New York'
    },
    {
        name: 'Emma Watson',
        Dues: '$1110.65',
        property: 'Buckingham Properties',
        city: 'Brighton',
        state: 'New York'
    },
    {
        name: 'Woody Harrelson',
        Dues: '$1097.32',
        property: 'Buckingham Properties',
        city: 'Rochester',
        state: 'New York'
    }
]

const Transactions = () => {
  return (
    <div style={{height: '90vh'}}>
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <h1><u>Transaction History</u></h1>
        </div>
        <table>
            {transactions.map((item, index) => {
                return (
                    <tr>
                        <th>{item.name}</th>
                        <th>{item.Dues}</th>
                        <th>{item.property}</th>
                        <th>{item.city}</th>
                        <th>{item.state}</th>
                    </tr>
                )
            })}
        </table>
    </div>
  )
}

export default Transactions