const Profile = () => {
  return(
    <main className='content'>
      <img className='content__background' src='/images/beach.jpg' alt=''/>
      <div className='content__about'>
        <img className='content__ava' src='/images/cat.jpg' alt=''/>
        <div>
          <h1 className='content__title'>Angelina I.</h1>
          <p>Date of Birth: 16 september</p>
          <p>City: Petrozavodsk</p>
          <p>Education: KSPA`11</p>
          <p>Web Site: https://github.com/angelinaivanova16</p>
        </div>
      </div>
      <form className='post-form'>
        <h2>My posts</h2>
        <div className='post-form__content'>
          <input className='post-form__news' type='text' placeholder='your news...' />
          <button className='post-form__btn' type='submit'>Send</button>
        </div>
      </form>
      <div className='content__posts'>
        <div>post1</div>
        <div>post2</div>
      </div>
    </main>
  )
}

export default Profile;