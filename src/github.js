

document.addEventListener("DOMContentLoaded", init);


function init() {

    loadGithubRepos();
    loadGithubProfile();

}


async function loadGithubProfile() {
    const gitProfile = document.querySelector(".github-profile-container");

    const profileUrl = await fetch("https://api.github.com/users/ehdgus4173");
    const profileData = await profileUrl.json();

    // bio, avatar_url, public_repos, followers, following

    const bio = profileData.bio;
    const avatar = profileData.avatar_url;
    const publicRepo = profileData.public_repos;
    const followers = profileData.followers;
    const following = profileData.following;

    const profileCard = document.createElement("div");
    profileCard.classList.add("profile-card");



    profileCard.innerHTML = `
        <img src="${avatar}" alt="Profile Image">
        <div class="profile-info">
            <h2>${profileData.name}</h2>
            <p>${bio ?? 'no BIO'}</p>
            <div class="profile-stats">
                <span>Repos: <b>${publicRepo}</b></span>
                <span>Followers: <b>${followers}</b></span>
                <span>Following: <b>${following}</b></span>
            </div>
        </div>
    `;


    gitProfile.appendChild(profileCard);

    // console.log(profileUrl);
    // console.log(profileData);
    // console.log(bio);
    // console.log(avatar);
    // console.log(publicRepo);
    // console.log(followers);
    // console.log(following);

}


async function loadGithubRepos() {
    const gitRepositories = document.querySelector(".github-repository-container");

    const repoUrl = await fetch("https://api.github.com/users/ehdgus4173/repos");
    const repoData = await repoUrl.json();

    //name, description, language, stargazers_count, forks_count, html_url
    repoData.forEach(repo => {
        const repoName = repo.name;
        const desc = repo.description;
        const language = repo.language;
        const starCnt = repo.stargazers_count;
        const forkCnt = repo.forks_count;
        const repoUrl = repo.html_url;


        const repoCard = document.createElement("article");
        repoCard.classList.add("repo-card");

        repoCard.innerHTML = `
            <h4 class="repo-name">${repoName}</h4>
            <p class="repo-description">${desc ?? " "}</p>
            <div class="repo-info">
                <span class="repo-language">${language}</span>
                <span>star: ${starCnt ?? "0"}</span>
                <span>fork: ${forkCnt}</span>
                <a href="${repoUrl}" class="repo-url">${repoName}</a>
            </div>
        `;


        gitRepositories.appendChild(repoCard);

        // console.log(repoName);
        // console.log(desc);
        // console.log(language);
        // console.log(starCnt);
        // console.log(forkCnt);
        // console.log(repoUrl);
    });

    // console.log(repoData);

}