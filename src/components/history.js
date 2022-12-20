export default function History(props) {
    if(props.data != ''){
        return (
                <div>
                <table>
                <thead>
                    <tr>
                        <th>Amount</th>
                        <th> Hoder Address</th>
                        <th> Verifier Address</th>
                        <th> Time</th>
                        {/* <th></th> */}

                    </tr>
                </thead>
                <tbody>
                    {props.data.map((item, index) => {
                        var timestamp = item[2]
                        var dateFormat = new Date(timestamp * 1000).toString();
                    return (
                        <tr>
                            <td>{item[1]}</td>
                            <td>{item[0]}</td>
                            <td>{item[3]}</td>
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




