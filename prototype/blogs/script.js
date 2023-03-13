const urlParams = new URLSearchParams(window.location.search);
const md = urlParams.get('md') || '';
const html = urlParams.get('html') || '';
const COMMENTS_PER_PAGE = 500;
let currentPage = 1;
function getParameterByName(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

async function displayComments(post_id) {
    // Get the comment section container element
    const commentSection = document.querySelector('.comment-section');

    // Retrieve the comments from the REST API
    const comments = await fetchComments(post_id || '');

    // Calculate the start and end indices of the current page
    const startIndex = (currentPage - 1) * COMMENTS_PER_PAGE;
    const endIndex = startIndex + COMMENTS_PER_PAGE;

    // Loop through each comment and add it to the comment section
    for (let i = startIndex; i < endIndex && i < comments.length; i++) {
        const commentContainer = document.createElement('div');
        commentContainer.classList.add('comment-container');

        const username = document.createElement('h4');
        username.textContent = comments[i].username;

        const content = document.createElement('p');
        content.textContent = comments[i].content;

        const date = document.createElement('p');
        date.classList.add('date');
        date.textContent = new Date(comments[i].created_at).toLocaleString();

        commentContainer.appendChild(username);
        commentContainer.appendChild(content);
        commentContainer.appendChild(date);

        commentSection.appendChild(commentContainer);
    }

    // Add a "Load More" button if there are more comments to show
    if (endIndex < comments.length) {
        const loadMoreButton = document.createElement('button');
        loadMoreButton.classList.add('load-more-button');
        loadMoreButton.textContent = 'Load More';

        loadMoreButton.addEventListener('click', () => {
            currentPage++;
            displayComments(post_id);
        });

        commentSection.appendChild(loadMoreButton);
    }
}

function loadFile() {
    if (md || html) {
        document.getElementById('blog-title').style = 'display: block'
        document.getElementById('blog-title').innerHTML = `<h1>${md}</h1>`
        document.getElementById('blog-index').style = 'display: none'
        document.getElementById('blog-post').style = 'display: block'
        document.getElementById('footer-to-blog-index').style = 'display: block'
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                if (html) {
                    var html = xhr.responseText;
                } else {
                    var markdown = xhr.responseText;
                    var html = marked.parse(markdown);
                }
                xhr.open('GET', `${html}.html`, true);
                document.getElementById('blog-post').innerHTML = html;
            }
        };
        if (html) {
            xhr.open('GET', `${html}.html`, true);
        } else {
            xhr.open('GET', `${md}.md`, true);
        }
        xhr.send();
    } else {
        document.getElementById('blog-title').style = 'display: none'
        document.getElementById('blog-title').innerHTML = ''
        document.getElementById('blog-index').style = 'display: block'
        document.getElementById('blog-post').style = 'display: none'
        document.getElementById('footer-to-blog-index').style = 'display: none'
    }

}
async function fetchComments(post_id) {
    // Make a GET request to the comments REST API
    const response = await fetch(`https://tng.coop/p2.php?post_id=${post_id}`);
    const comments = await response.json();
    return comments;
}


function submitForm(event) {
    event.preventDefault()
    // Get the form data
    const postId = md || html
    const username = document.getElementById('name').value;
    const content = document.getElementById('comment').value;

    // Create a JSON object with the form data
    const formData = {
        post_id: postId,
        username: username,
        content: content
    };
    // Send an HTTP POST request to the backend endpoint
    fetch('https://tng.coop/p.php', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            // If the response is OK, show a success message

            const commentsNode = document.getElementById('comments');
            commentsNode.innerHTML = ''
            displayComments(postId)
            // alert('Comment submitted successfully!');
        } else {
            // If there is an error, show an error message
            alert('Error submitting comment. Please try again later.');
        }
    }).catch(error => {
        // alert(JSON.stringify(error))
        // alert(JSON.stringify(event))
        // If there is an error, show an error message
        alert('Error submitting comment. Please try again later.');
    });
}
