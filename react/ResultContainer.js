import * as React from 'react';
import { Leaf } from './Leaf';
import { Post } from './Post';

export class ResultContainer extends React.Component {
    constructor(props){
        super(props);
// <<<<<<< HEAD
//         this.state = {results: [],
//                       center: [],
//                       latons:[],
//                       active: false
//         };
//     }
    
//     componentDidMount(){
//         var scope = this;
//         Socket.on('results', function(data){
            
//             var temp = [];
//             var templatlons = [];
//             // console.log(data);
//             for( var i in data){
//                 temp.push( (<Result key = {data[i].id}  data = {data[i]} />));
//             }

//             for(var j in data){
//             templatlons.push(data[j].latlon);
//             // console.log(data[j].latlon);
//             }
//             scope.setState({latlons: templatlons});
//             scope.setState({results: temp});
//             scope.setState({center: data[0].center});
//             scope.setState({active: true});

            

//         });
// =======
        console.log("Results container rendering with posts:");
        console.log(this.props.posts);
    }
    
    render(){
        let map = (<div> </div>);
        console.log("RESULTS CONTANER PROPS:")
        console.log(this.props)
        if(this.props.posts.length != 0){
             map = (<Leaf posts = {this.props.posts}/>);
        }
        return(
            <div className = "postContainer">
            {map}
                {this.props.posts.map(function(post, i){
                  console.log('Post rendering...');
                  console.log("Key:" + i);
                  console.log(post);
                  return <Post key={i}  post={post} />
                })}
            </div>
            );
    }
}