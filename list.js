// Select 박스 날짜 기입
function day_write(arr1d){
    arr1d.sort((a,b) => {
        if(a.date > b.date){
            return 1;
        }else if (a.date < b.date) {
            return -1;
        } else {
            alert('!오류 발생!\n"일기 데이터 확인 바람"');
        }
    });

    for(let i = 0; i < arr1d.length; i++){
        document.write(`<option value="${arr1d[i].date}">${arr1d[i].date}</option>`);
    }
}

// Select 박스 날짜별로 메인 텍스트 변경
function ChangeValue(arr1d){
    let value_str = document.getElementById('select_value');
    let value = value_str.options[value_str.selectedIndex].value;
    const div_tt = document.getElementById('title');
    const div_mt = document.getElementById('maintext');

    if(value === "none"){
        div_tt.innerHTML = "";
        div_mt.innerHTML = "";
    };

    const one_Diary = arr1d.find((note) => {
        if(note.date === value){
            return true;
        };
        return false;
    });

    div_tt.innerHTML = `${one_Diary.date} / ${one_Diary.title}`;
    div_mt.innerHTML = one_Diary.mainText;
};

// 일기
const Diary = [
    {
        title:'일기장 사이드 프로젝트 시작',
        mainText:'국승민의 사이드 프로젝트 시작일이다.',
        date:'2023-05-08',
    },
    {
        title:'사이드 프로젝트 계획 다시 짜기',
        mainText:`무작정 코딩만 하니까 JS 실력이 느는 느낌이 없다.
        <br>단계 목표를 정해서 하루에 하나씩 완전히 이해하면서 개발해야지
        `,
        date:'2023-05-11',
    },
];