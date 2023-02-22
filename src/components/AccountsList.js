import React from 'react'

export function AccountsList({accounts}) {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">Status</th>
                    <th scope="col">Data</th>
                </tr>
            </thead>
            <tbody>
                {accounts.map(account => (
                    <tr >
                        <td>account.status</td>
                        <td>account.data</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}