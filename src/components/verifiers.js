export default function Verifiers(props) {
    if(props.data != ''){
        console.log(props.data)
        return (
                <div>
                <table>
                <thead>
                    <tr>
                        <th>Verifier Address</th>
                        <th> Added By </th>
                        <th> Time</th>
                    </tr>
                </thead>
                <tbody>
                    {props.data.map((item, index) => {
                        var timestamp = item[2]
                        var dateFormat = new Date(timestamp * 1000).toString();
                    return (
                        <tr>
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




