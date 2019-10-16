/**
 * @apiDefine ApiHeaderAuthorization
 * @apiHeader {String} Authorization JWT
 */

/**
 * @api {get} /api/admin/wuser/{id?} 1. GET : 회원 정보 가져오기
 * @apiName GetWuser
 * @apiGroup Wuser
 * @apiUse ApiHeaderAuthorization
 *
 * @apiParam {String} [id] id(primary key) / id가 넘어올 경우 특정 회원 리턴, 그렇지 않으면 회원 리스트 리턴
 *
 * @apiSuccess {String} id primary key
 * @apiSuccess {String} username ID
 * @apiSuccess {String} password password
 * @apiSuccess {String} email email
 * @apiSuccess {String} nick nick
 * @apiSuccess {String} grade 등급
 * @apiSuccess {String} cp 회사
 * @apiSuccess {String} dtp 부서
 * @apiSuccess {String} name 이름
 * @apiSuccess {String} ctl 회사 전화번호
 * @apiSuccess {String} hp 핸드폰 번호
 * @apiSuccess {String} cmt 비고
 * @apiSuccess {Date} createdAt 생성 시간
 * @apiSuccess {Date} updatedAt 업데이트 시간
 * @apiSuccess {String} from_where local or admin / 계정 생성 루트
 * @apiSuccess {String} private_s_key 추천인 코드
 * @apiSuccess {String} join_s_key 입력한 추천인 코드
 * @apiSuccess {String} join_status 100 or null
 * @apiSuccess {String} job 직업
 * @apiSuccess {Date} pay_start 과금 시작일
 * @apiSuccess {Date} pay_end 과금 종료일
 * @apiSuccess {String} confirm_key ?
 * @apiSuccess {String} group_id 소속 그룹
 *
 * @apiSuccessExample Success-Response:
 *     case : id Exist
 *     HTTP/1.1 200 OK
 *     {
 *         "id": "ry0APY_8-",
 *         "username": "baekdae89@gmail.com",
 *         "password": "baek$135",
 *         "email": "baekdae89@gmail.com",
 *         "nick": "baekdae89@gmail.com",
 *         "grade": "M0",
 *         "cp": null,
 *         "dtp": null,
 *         "name": "백대선",
 *         "ctel": "--",
 *         "hp": "--",
 *         "cmt": "dsadasd",
 *         "from_where": "local",
 *         "private_s_key": "PSK7515321051",
 *         "join_s_key": null,
 *         "join_status": "100",
 *         "job": null,
 *         "pay_start": null,
 *         "pay_end": null,
 *         "confirm_key": null,
 *         "group_id": null,
 *         "createdAt": "2017-07-28T09:45:57.000Z",
 *         "updatedAt": "2019-08-17T15:00:01.000Z"
 *     }
 *
 *     case : id not Exist
 *     HTTP/1.1 200 OK
 *     [
 *          {
 *              상단 object 내용 형상
 *          },
 *          {
 *              상단 object 내용 형상
 *          }
 *     ]
 *
 */

/**
 * @api {post} /api/admin/wuser 2. POST : 회원 생성
 * @apiName PostWuser
 * @apiGroup Wuser
 * @apiUse ApiHeaderAuthorization
 *
 * @apiParam {String} nick 닉
 * @apiParam {String} name 이름
 * @apiParam {String} email email
 * @apiParam {String} username 로그인 ID
 * @apiParam {String} password 로그인 PW
 * @apiParam {String} from_where 'local'
 * @apiParam {String} grade 'M0'
 * @apiParam {String} join_status '100'
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *         "id": "Szwrkvqj",
 *         "username": "hellworld@weliveon.net",
 *         "password": "hello$123",
 *         "email": "hellworld@weliveon.net",
 *         "nick": "백대선",
 *         "grade": "M300",
 *         "cp": "메가넥스트",
 *         "name": "백대선",
 *         "private_s_key": "helloworld",
 *         "from_where": "local",
 *         "pay_start": "2019-09-30T00:00:00.000Z",
 *         "pay_end": "2019-10-31T00:00:00.000Z",
 *         "updatedAt": "2019-10-02T06:44:39.153Z",
 *         "createdAt": "2019-10-02T06:44:39.153Z",
 *         "dtp": null,
 *         "ctel": null,
 *         "hp": null,
 *         "cmt": null,
 *         "join_s_key": null,
 *         "join_status": null,
 *         "job": null,
 *         "confirm_key": null,
 *         "group_id": null
 *     }
 *
 */


/**
 * @api {put} /api/admin/wuser/{id} 3. PUT : 회원 정보 수정
 * @apiName PutWuser
 * @apiGroup Wuser
 * @apiUse ApiHeaderAuthorization
 *
 * @apiParam {String} id id가 넘어올 경우 특정 회원만 수정, 그렇지 않으면 request.payload.where에 따라 여러 회원 정보 수정
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK (배열의 값은 수정된 회원 의 수 return)
 *     [ 1 ]
 *
 */

/**
 * @api {delete} /api/admin/wuser/{id} 4. DELETE : 회원 삭제
 * @apiName DeleteWuser
 * @apiGroup Wuser
 * @apiUse ApiHeaderAuthorization
 *
 * @apiParam {String} id id가 넘어올 경우 특정 회원만 삭제, 그렇지 않으면 request.payload.where에 따라 여러 회원 삭제
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK (배열의 값은 삭제된 회원 의 수 return)
 *     [ 1 ]
 *
 */




/**
 * @api {get} /api/admin/getPreSignedUrl/{dirName}/{fileName} 1. GET AWS S3 presigned URL
 * @apiName GetPreSignedUrl
 * @apiGroup File
 * @apiUse ApiHeaderAuthorization
 * @apiDescription AWS S3 파일 업로드 전 미리 서명 된 URL 가져오는 API
 *
 * @apiParam {String} dirName AWS S3 weliveon2 버킷 내에 classroom id(primary key)를 기반으로 클래스별로 디렉토리 구분.
 * @apiParam {String} fileName 고유한 fileName
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK (Expires : 60s)
 *     https://weliveon2.s3.ap-northeast-2.amazonaws.com/rJlVstqtdH/test?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIHN3TP6ABZROXLKA%2F20191008%2Fap-northeast-2%2Fs3%2Faws4_request&X-Amz-Date=20191008T064742Z&X-Amz-Expires=60&X-Amz-Signature=57fb6404d26bd9fc470e730cde707181e19f5244c2deee1ba1d6ccbe075551c9&X-Amz-SignedHeaders=host
 *
 */

/**
 * @api {PUT} https://weliveon2.s3.ap-northeast-2.amazonaws.com/rJlVstqtdH/test?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIHN3TP6ABZROXLKA%2F20191008%2Fap-northeast-2%2Fs3%2Faws4_request&X-Amz-Date=20191008T064742Z&X-Amz-Expires=60&X-Amz-Signature=57fb6404d26bd9fc470e730cde707181e19f5244c2deee1ba1d6ccbe075551c9&X-Amz-SignedHeaders=host 2. AWS S3 File upload
 * @apiName AwsUpload
 * @apiGroup File
 * @apiUse ApiHeaderAuthorization
 * @apiDescription GET AWS S3 predsigned URL 에서 생성된 URL로 파일 Object를 포함하여 request 요청하면 업로드 OK
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *
 */




/**
 * @api {get} /api/admin/qna/{id?}?order=?&limit=?&page=?&text=?&like_count=?&comment_count=? 1. GET : Qna list 가져오기
 * @apiName GetQna
 * @apiGroup Qna
 * @apiUse ApiHeaderAuthorization
 * @apiDescription QueryString에 required 조건은 id가 넘어오지 않을 경우에만 Check 함.
 *
 * @apiParam {String} [id]              id(primary key) / id가 넘어올 경우 특정 Qna 리턴, 그렇지 않으면 Qna list 리턴
 * @apiParam {String} order             [QueryString] 'favor' || 'recently' (둘중 다른 텍스트가 넘어올 경우 joi로 err처리)
 * @apiParam {String} limit             [QueryString] 한 페이지에 보여질 Qna 수
 * @apiParam {String} page              [QueryString] 현재 페이지 수
 * @apiParam {String} [text]            [QueryString] text 검색 조건
 * @apiParam {String} [like_count]      [QueryString] like_count 이상 검색 조건
 * @apiParam {String} [comment_count]   [QueryString] comment_count 이상 검색 조건
 *
 *
 * @apiSuccessExample Success-Response:
 *     case : id Exist
 *     HTTP/1.1 200 OK
 *    {
 *        "id": "HygCyFN9BB",
 *        "writer": "달토끼",
 *        "text": "도달/노출/좋아요 의 수치가 비중상 어느 정도가 좋을까요? 도달은 2천인데 좋아요가 30이면 안좋은 컨텐츠인지 궁금합니다.",
 *        "likes": null,
 *        "x": null,
 *        "y": null,
 *        "z": null,
 *        "secret": null,
 *        "classroom_id": null,
 *        "mysession_id": "B1bhJ13-MN",
 *        "createdAt": "2019-09-02T06:38:30.000Z",
 *        "updatedAt": "2019-09-02T06:38:30.000Z",
 *        "Qnalikes": [
 *            {
 *                "id": "Sy8SF45HB",
 *                "writer": "제이",
 *                "qna_id": "HygCyFN9BB",
 *                "createdAt": "2019-09-02T06:39:57.857Z",
 *                "updatedAt": "2019-09-02T06:39:57.857Z"
 *            },
 *            {
 *                "id": "B1Z8cE9rH",
 *                "writer": "달토끼",
 *                "qna_id": "HygCyFN9BB",
 *                "createdAt": "2019-09-02T06:44:24.536Z",
 *                "updatedAt": "2019-09-02T06:44:24.536Z"
 *            }
 *        ],
 *        "Qnacomments": [
 *            {
 *                "id": "Sylftt4crS",
 *                "writer": "제이",
 *                "text": "이거 꼭 질문해주세용 넘 궁금",
 *                "qna_id": "HygCyFN9BB",
 *                "createdAt": "2019-09-02T06:40:57.709Z",
 *                "updatedAt": "2019-09-02T06:40:57.709Z"
 *            }
 *        ]
 *    }
 *
 *     case : id not Exist
 *     HTTP/1.1 200 OK (/api/admin/qna?limit=2&page=1&order=favor&mysession_id=B1bhJ13-MN)
 *    {
 *        "count": 30,
 *        "totalpage": 15,
 *        "rows": [
 *            {
 *                "id": "HyNeJmQcBB",
 *                "writer": "중차우",
 *                "text": "안녕하세요",
 *                "likes": null,
 *                "x": null,
 *                "y": null,
 *                "z": null,
 *                "secret": null,
 *                "createdAt": "2019-09-02T05:04:24.000Z",
 *                "updatedAt": "2019-09-02T05:04:24.000Z",
 *                "classroom_id": null,
 *                "mysession_id": "B1bhJ13-MN",
 *                "like_count": "2",
 *                "comment_count": "0"
 *            },
 *            {
 *                "id": "S1soOXcBB",
 *                "writer": "제이",
 *                "text": "하루에 몇개 피드를 올리는게 좋은지? 2일에 한번씩 주기적으로 하는게 좋은가요? 아님 한꺼번에 많이 올려야 되나요??",
 *                "likes": null,
 *                "x": null,
 *                "y": null,
 *                "z": null,
 *                "secret": null,
 *                "createdAt": "2019-09-02T05:29:06.000Z",
 *                "updatedAt": "2019-09-02T05:29:06.000Z",
 *                "classroom_id": null,
 *                "mysession_id": "B1bhJ13-MN",
 *                "like_count": "2",
 *                "comment_count": "0"
 *            }
 *        ]
 *    }
 *
 */


