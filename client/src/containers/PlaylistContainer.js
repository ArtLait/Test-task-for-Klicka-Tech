import React from 'react'
import { connect } from 'react-redux'
import { getMusics } from '../actions/playlist'

import EnhancedTable from '../components/EnhancedTable'


class PlaylistContainer extends React.Component {

    componentDidMount() {
        this.props.getMusics();
    }

    render() {
        let  { musics } = this.props;
        
        return (
            <EnhancedTable musics={musics} />
        )
    }
}

const mapStateToProps = (state) => {
    let { playlist: { musics = []}} = state;
    return {
        musics
    };
}

const mapDispatchToProps = (dispatch) => (
{   
    getMusics: () => dispatch(getMusics())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PlaylistContainer);