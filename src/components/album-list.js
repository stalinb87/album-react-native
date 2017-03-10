import React, {Component} from 'react';
import {ScrollView} from 'react-native';
import Axios from 'axios';
import AlbumDetail from './album-detail';

class AlbumList extends Component {

    constructor() {
        super();
        this.state = {
            albums: []
        };
    }
    componentWillMount() {
        Axios.get('https://rallycoding.herokuapp.com/api/music_albums').then(response => {
            let albums = response.data
            this.setState({albums});
        });
    }
    renderAlbums() {
        return this.state.albums.map(album => <AlbumDetail key={album.title} album={album}/>);
    }
    render() {
        return (
            <ScrollView>
                {this.renderAlbums()}
            </ScrollView>
        );
    }
}
export default AlbumList;
