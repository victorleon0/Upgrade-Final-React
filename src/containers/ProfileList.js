import React, { Component } from 'react';
import { connect } from 'react-redux';
import EditProfile from './EditProfile.js';
import ProfileCard from '../components/ProfileCard/ProfileCard.js';
import './ProfileList.css';

class ProfileList extends Component {
  render() {
  return (
   <div className="flex-container_list">
      {this.props.profiles.map((profile) => (
          <div key={profile.id} className="cardframe">
            {profile.editing ? <EditProfile profile={profile} key={profile.id} />
            : <ProfileCard key={profile.id} profile={profile} />}
          </div>
        ))}
  </div>
  )
  }
}


const mapStateToProps = (state) => {
  return {
    profiles: state.profiles
  }
}

export default connect(mapStateToProps)(ProfileList)
