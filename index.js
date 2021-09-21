//This function will get us the user value from the URL parameters (add ?user=user1 to end of url)
function getQueryVariable(value) {
       let query = window.location.search.substring(1);
       let values = query.split("&");
       for (let i=0; i<values.length; i++) {
               let pair = values[i].split("=");
               if(pair[0] == value){return pair[1];}
       }
       return(false);
}
//If there is no URL parameter specifying a user, user2 will be default
let activeUser = getQueryVariable('user');
if (activeUser === false){activeUser = 'user2'};

const users = {
    user1 : {
        userName: '@elonmusk',
        displayName: 'Elon Musk',
        joinedDate: 'June 2009',
        tweetCount: 15456,
        followingCount: 103,
        followerCount: 47900000,
        avatarURL: 'assets/elonmusk.jpg',
        coverPhotoURL: 'assets/elonmusk-cover.jpeg',
        tweets: [
            {
                text: 'I admit to judging books by their cover',
                timestamp: '2/10/2021 00:01:20'
            },
            {
                text: 'Starship to the moon',
                timestamp: '2/09/2021 18:37:12'
            },
            {
                text: 'Out on launch pad, engine swap underway',
                timestamp: '2/09/2021 12:11:51'
            }
        ]
    },
    user2 : {
        userName: '@BillGates',
        displayName: 'Bill Gates',
        joinedDate: 'July 2009',
        tweetCount: 3624,
        followingCount: 274,
        followerCount: 53800000,
        avatarURL: 'assets/billgates.jpg',
        coverPhotoURL: 'assets/billgates-cover.jpeg',
        tweets: [
            {
                text: 'Everybody asks, how is the next Windows coming along? But nobody asks how is Bill? :/',
                timestamp: '2/10/2021 00:02:22'
            },
            {
                text: 'Should I start tweeting memes? Let me know in a comment.',
                timestamp: '2/09/2021 18:33:14'
            },
            {
                text: 'In 2020, I read a book every hour.',
                timestamp: '2/09/2021 12:12:12'
            }
        ]
    }
};

// These two functions will help us format larger numbers for friendlier reading
function intlFormat(num)
{
  return new Intl.NumberFormat().format(Math.round(num*10)/10);
}
function makeFriendly(num)
{
  if(num >= 1000000)
    return intlFormat(num/1000000)+'M';
  if(num >= 1000)
    return intlFormat(num/1000)+'k';
  return intlFormat(num);
}

//Tab Selector
const navTabs = document.querySelectorAll('.nav-tabs');
navTabs.forEach(tab => {
  tab.addEventListener('click', function() {
    for (let tab of navTabs){
      tab.classList.remove('tab-active');
    }
    tab.classList.add('tab-active');
  })
})

//Follow Button
const followButton = document.querySelector('.follow-button');
let follow = false;

followButton.addEventListener('click', function() {
  if (followButton.textContent === 'Follow') {
    followButton.textContent = 'Following';
    followButton.setAttribute('style','background-color: cornflowerblue; color: white');
  }
  else {
    followButton.textContent = 'Follow';
    followButton.setAttribute('style','background-color: white; color: cornflowerblue');
    // followButton.style.cssText = 'background-color: white; color: cornflowerblue;';
  }
});

//Header Text
const header = document.querySelector(".header-info");
let userName = document.createElement('h4');
userName.innerHTML = `<h4 class='display-name'>${users[activeUser].displayName}</h4>
<h4 class='check'>✔</h4>`;
header.appendChild(userName);

let tweetCount = document.createElement('h6');
tweetCount.innerHTML = `<h6 class='tweet-count'>${makeFriendly(users[activeUser].tweetCount)} Tweets</h6>`;
header.appendChild(tweetCount);

//Cover Image
const coverDiv = document.querySelector('.cover-img');
let coverImg = document.createElement('img');
coverImg.src = users[activeUser].coverPhotoURL;
coverDiv.appendChild(coverImg);

//Profile Pic
const profileContainer = document.querySelector('.profile-container');
let profilePic = document.createElement('img');
profilePic.classList.add('profile-pic');
profilePic.src = users[activeUser].avatarURL;
profileContainer.appendChild(profilePic);

//Profile Text
let displayName = document.createElement('h4');
displayName.innerHTML = `<h4 class='display-name'>${users[activeUser].displayName}</h4>
<h4 class='check'>✔</h4>`;
profileContainer.appendChild(displayName);

let userTag = document.createElement('h5');
userTag.innerHTML = `<h5 class='user-tag'>${users[activeUser].userName}</h5>`;
profileContainer.appendChild(userTag);

let joinedTime = document.createElement('h5');
joinedTime.innerHTML = `<h5 class='joined-date'>📅 Joined ${users[activeUser].joinedDate}`;
profileContainer.appendChild(joinedTime);

let followingCount = document.createElement('h5');
followingCount.innerHTML = `<h5 class='following-count'>${makeFriendly(users[activeUser].followingCount)} Following</h5>`;
profileContainer.appendChild(followingCount);

let followersCount = document.createElement('h5');
followersCount.innerHTML = `<h5 class='followers-count'>${makeFriendly(users[activeUser].followerCount)} Followers</h5>`;
profileContainer.appendChild(followersCount);

//Tweets
const tweetContainer = document.querySelector('.tweets');
for (let i=0; i<users[activeUser].tweets.length; i++) {
  
  let tweet = document.createElement('div');//Tweet Container
  tweet.classList.add('tweet');
  tweetContainer.appendChild(tweet);
  
  let tweetAvatarContainer = document.createElement('div');//Profile Pic Container
  tweetAvatarContainer.classList.add('tweet-avatar-container');
  tweet.appendChild(tweetAvatarContainer);
  
  let tweetAvatar = document.createElement('img');//Avatar IMG
  tweetAvatar.classList.add('tweet-avatar');
  tweetAvatar.src = users[activeUser].avatarURL;
  tweetAvatarContainer.appendChild(tweetAvatar);
  
  const tweetTextContainer = document.createElement('div'); //
  tweetTextContainer.classList.add('tweet-text-container');  
  tweetTextContainer.innerHTML = `
  <p class='tweet-display-name'>${users[activeUser].displayName}</p>
  <p class='check'>✔</p>
  <p class='tweet-username'>${users[activeUser].userName}</p>
  <p class='tweet-timestamp'>${users[activeUser].tweets[i].timestamp}</p>
  <p class='tweet-text'>${users[activeUser].tweets[i].text}</p>
  `;
  tweet.appendChild(tweetTextContainer);
};