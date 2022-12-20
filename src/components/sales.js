export default function Sales(props) {
    // console.log(props.data)
    if(props.data != ''){
        return (
                <div>
                <table>
                <thead>
                    <tr>
                        <th>Amount </th>
                        <th> Address</th>
                    </tr>
                </thead>
                <tbody>
                    {props.data.map((item, index) => {
                    return (
                        <tr>
                            <td>{item[1]}</td>
                            <td>{item[0]}</td>
                        </tr>
                    );
                    })}
                </tbody>
                </table>
            </div>
          );
    }

}




