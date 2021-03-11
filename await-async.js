console.log("Before");
console.log("After");

// const p = getUser(1);
// p.then((user) => getRepositories(user.gitHubUsername))
//   .then((repos) => getCommits(repos[0]))
//   .then((commits) => console.log("Commits", commits))
//   .catch((err) => console.log("Error", err.message));

const displayCommits = async () => {
  try {
    const user = await getUser(1);
    const repos = await getRepositories(user.gitHubUsername);
    const commit = await getCommits(repos[0]);
    console.log(commit);
  } catch (err) {
    console.log(err.message);
  }
};

displayCommits();

function getUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Reading a user from a database...");
      resolve({ id: id, gitHubUsername: "mosh" });
    }, 2000);
  });
}

function getRepositories(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Calling GitHub API...");
      reject(new Error("Could not get repos"));
    }, 2000);
  });
}

function getCommits(repo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Calling GitHub API...");
      resolve(["ccccccccccccc"]);
    }, 2000);
  });
}
