let InterviewList = [];
let RejectionList = [];
let currentStatus='all';
let total = document.getElementById('total');
let InterviewCount = document.getElementById('InterviewCount');
let RejectionCount = document.getElementById('RejectionCount');

const allFilterBtn = document.getElementById('all-filter-btn');
const InterviewFilterBtn = document.getElementById('Interview-filter-btn');
const RejectionFilterBtn= document.getElementById('Rejection-filter-btn');

const allCardSection = document.getElementById('allCards');
const mainContainer = document.querySelector('main');
function calculateCount() {
    total.innerText = allCardSection.children.length ;
    InterviewCount.innerText = InterviewList.length;
    RejectionCount.innerText = RejectionList.length;
}
calculateCount();
function toggleStyle(id) {
    
     allFilterBtn.classList.add('bg-white', 'text-black')
    InterviewFilterBtn.classList.add('bg-white', 'text-black')
    RejectionFilterBtn.classList.add('bg-white', 'text-black')

    allFilterBtn.classList.remove( 'bg-blue-500', 'text-white')
    InterviewFilterBtn.classList.remove('bg-blue-500', 'text-white')
    RejectionFilterBtn.classList.remove('bg-blue-500', 'text-white')

    
    const selected = document.getElementById(id)

    currentStatus = id
    console.log(currentStatus);

    selected.classList.remove('bg-white', 'text-black' )
    selected.classList.add('bg-blue-500', 'text-white' )
}

