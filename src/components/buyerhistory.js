export default function BuyerHistory(props) {
    if(props.data != ''){
        return (
                <div>
                <table>
                <thead>
                    <tr>
                        <th>Amount</th>
                        <th> From Address</th>
                        <th> To Address</th>
                        <th> Time</th>
                    </tr>
                </thead>
                <tbody>
                    {props.data.map((item, index) => {
                        var timestamp = item[3]
                        var dateFormat = new Date(timestamp * 1000).toString();
                    return (
                        <tr>
                            <td>{item[2]}</td>
                            <td>{item[0]}</td>
                            <td>{item[1]}</td>
                            <td>{dateFormat}</td>
                        </tr>
                    );
                    })}
                </tbody>
                </table>
            </div>
          );
    }

}




