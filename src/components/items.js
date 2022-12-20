export default function Items(props) {
    // console.log(props.data)
    if(props.data != ''){
        return (
                <div>
                <table>
                <thead>
                    <tr>
                        <th>Amount </th>
                        <th> Address</th>
                        <th> Time</th>
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




