import React from "react";

class Detail extends React.Component{
    componentDidMount(){
        const { location, history } = this.props;
        if(location.state === undefined){
            history.push("/");
        }
    }
    render() {
        const { location } = this.props;
        if (location.state){
            return <h5>{location.state.title}</h5>;
        }
        else{
            return null;
        }
    }
}

export default Detail;