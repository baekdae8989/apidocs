/**
 * @apiDefine ApiHeaderAuthorization
 * @apiHeader {String} Authorization JWT
 */

/**
 * @api {get} api/v1/custom/home_userinfo/{username} GET HomeUserInfo
 * @apiName HomeUserInfo
 * @apiGroup Custom
 * @apiUse ApiHeaderAuthorization
 * @apiDescription HOME 화면에 유저정보 가져오는 API
 *
 * @apiParam {String} username [QueryParams] username
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 {
    "username": "baek_dae@naver.com",
    "grade": "A",
    "pay_start": null,
    "pay_end": null,
    "cls_count": 65,
    "quizset_count": 72
}
 *
 */
/**
 * @api {get} api/v1/custom/home_myclass/{username}  GET HomeMyClass
 * @apiName HomeMyClass
 * @apiGroup Custom
 * @apiUse ApiHeaderAuthorization
 * @apiDescription HOME 화면에 최근 10일간 생성한 class 가져오는 API
 *
 * @apiParam {String} username [QueryParams] username
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 참고 : http://ec2-54-180-89-73.ap-northeast-2.compute.amazonaws.com:1337/api/v1/custom/home_myclass?username=baek_dae@naver.com
 *
 */
/**
 * @api {get} api/v1/custom/home_myquizset/{username} GET HomeMyQuizSet
 * @apiName HomeMyQuizSet
 * @apiGroup Custom
 * @apiUse ApiHeaderAuthorization
 * @apiDescription HOME 화면에 최근 10일간 생성한 quizset 가져오는 API
 *
 * @apiParam {String} username [QueryParams] username
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 참고 : http://ec2-54-180-89-73.ap-northeast-2.compute.amazonaws.com:1337/api/v1/custom/home_myquizset?username=baek_dae@naver.com
 *
 */
/**
 * @api {get} api/v1/custom/qna_shuffle/{mysession_id} GET QnaShuffle
 * @apiName QnaShuffle
 * @apiGroup Custom
 * @apiUse ApiHeaderAuthorization
 * @apiDescription Q&A 랜덤하게 하나 가져오는 API
 *
 * @apiParam {String} mysession_id [QueryString] mysession_id
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     참고 : http://ec2-54-180-89-73.ap-northeast-2.compute.amazonaws.com:1337/api/v1/custom/qna_shuffle/VyDeHHotW
 *
 */


/**
 * @api {get} api/v1/get_presigned_url/{dirName}/{fileName} 1. GET AWS S3 presigned URL
 * @apiName GetPreSignedUrl
 * @apiGroup File
 * @apiUse ApiHeaderAuthorization
 * @apiDescription AWS S3 파일 업로드 전 미리 서명 된 URL 가져오는 API
 *
 * @apiParam {String} dirName AWS S3 weliveon2 버킷 내에 classroom id(primary key)를 기반으로 클래스별로 디렉토리 구분.
 * @apiParam {String} fileName 고유한 fileName
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK (Expires : 180s)
 {
    "preSignedUrl": "https://weliveon2.s3.ap-northeast-2.amazonaws.com/testdirectory/V63yDXQA.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIHN3TP6ABZROXLKA%2F20191101%2Fap-northeast-2%2Fs3%2Faws4_request&X-Amz-Date=20191101T095638Z&X-Amz-Expires=180&X-Amz-Signature=4297ecc58f951f81ec606cd80b93550a18c7d4f61b8a2a17b35422ae64954f2c&X-Amz-SignedHeaders=host",
    "fileUrl": "https://weliveon2.s3.ap-northeast-2.amazonaws.com/testdirectory/V63yDXQA.png",
    "orig_fileName": "1.png"
}

 *
 */

/**
 * @api {PUT} https://weliveon2.s3.ap-northeast-2.amazonaws.com/testdirectory/V63yDXQA.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIHN3TP6ABZROXLKA%2F20191101%2Fap-northeast-2%2Fs3%2Faws4_request&X-Amz-Date=20191101T095638Z&X-Amz-Expires=180&X-Amz-Signature=4297ecc58f951f81ec606cd80b93550a18c7d4f61b8a2a17b35422ae64954f2c&X-Amz-SignedHeaders=host 2. AWS S3 File upload
 * @apiName AwsFileUpload
 * @apiGroup File
 * @apiUse ApiHeaderAuthorization
 * @apiDescription 1번에서 생성된 preSignedUrl로 파일 Object를 포함하여 request 요청하면 업로드 OK
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *
 */

/**
 * @api {DELETE} api/v1/file/{dirName}/{fileName} 3. AWS S3 File Delete
 * @apiName AwsFileDelete
 * @apiGroup File
 * @apiUse ApiHeaderAuthorization
 *
 * @apiParam {String} dirName AWS S3 weliveon2 버킷 내에 classroom id(primary key)를 기반으로 클래스별로 디렉토리 구분.
 * @apiParam {String} fileName 고유한 fileName
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {count : 1}
 *
 */

/**
 * @api {POST} api/v1/file/share/{flag} 4. Share zip, pdf 변환 후 S3 upload
 * @apiName ShareZipConvert
 * @apiGroup File
 * @apiUse ApiHeaderAuthorization
 * @apiDescription zip 방식은 파일 그대로 업로드, pdf 방식은 pdf 이미지를 base64 방식으로 변환하여 전달하여야 함.
 *
 * @apiParam {String} flag [QueryParams]'pdf' || 'zip' (둘중 다른 텍스트가 넘어올 경우 joi로 err처리)
 * @apiParam {Object} file [payload] share file object
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
    "name": "위라이브온매뉴얼.zip",
    "datas": [
            {
                "id": "9ee781c0-2559-4c3c-9c50-4af49e73a0cc",
                "info1": "1.png",
                "info2": "1",
                "url": "https://weliveon2.s3.ap-northeast-2.amazonaws.com/S4VGehNE/1.png",
                "updatedAt": "2019-11-01T08:32:03.454Z",
                "createdAt": "2019-11-01T08:32:03.454Z",
                "info3": null
            },
            {
                "id": "9c3c1bf1-9f28-4717-8e42-b55985545d72",
                "info1": "2.png",
                "info2": "2",
                "url": "https://weliveon2.s3.ap-northeast-2.amazonaws.com/S4VGehNE/2.png",
                "updatedAt": "2019-11-01T08:32:03.272Z",
                "createdAt": "2019-11-01T08:32:03.272Z",
                "info3": null
            },
            {
                "id": "94ab0d79-2596-47fc-a193-8864281260ad",
                "info1": "3.png",
                "info2": "3",
                "url": "https://weliveon2.s3.ap-northeast-2.amazonaws.com/S4VGehNE/3.png",
                "updatedAt": "2019-11-01T08:32:03.335Z",
                "createdAt": "2019-11-01T08:32:03.335Z",
                "info3": null
            }
        ]
    }
 *
 */


/**
 * @api {get} api/v1/classroom/{id?}?mysession_id=?&order=?&limit=?&page=?&text=?&like_count=?&comment_count=? 1. GET : Qna Select
 * @apiName QnaSelect
 * @apiGroup Qna
 * @apiUse ApiHeaderAuthorization
 * @apiDescription QueryParams의 id 값이 넘어오지 않을 경우만 QueryString -> mysession_id, order, limit, page 필수 조건 체크 함.
 *
 * @apiParam {String} [id]              [QueryParams] id(primary key) / id가 넘어올 경우 특정 Qna 리턴, 그렇지 않으면 Qna list 리턴
 * @apiParam {String} mysession_id      [QueryString] mysession_id
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
 *     참고 : http://ec2-54-180-89-73.ap-northeast-2.compute.amazonaws.com:1337/api/v1/qna/VyogUToFZ
 *
 *     case : id not Exist
 *     HTTP/1.1 200 OK
 *     참고 : http://ec2-54-180-89-73.ap-northeast-2.compute.amazonaws.com:1337/api/v1/qna?mysession_id=VyDeHHotW&page=1&limit=12&order=favor
 */

/**
 * @api {post} api/v1/qna 2. POST : Qna Insert
 * @apiName QnaInsert
 * @apiGroup Qna
 * @apiUse ApiHeaderAuthorization
 *
 * @apiParam {String} writer                [payload] writer
 * @apiParam {String} text                  [payload] text
 * @apiParam {String} mysession_id          [payload] 참고하는 qna 세션 id
 * @apiParam {Number} secret                [payload] null or 1 ( null = 공개, 1 = 익명)
 *
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 {
    "id": "f151afc9-19c3-452b-9b5e-68eb76a30923",
    "secret": 1,
    "writer": "백대선",
    "mysession_id": "VyDeHHotW",
    "text": "안녕하십니",
    "updatedAt": "2019-11-01T09:03:11.615Z",
    "createdAt": "2019-11-01T09:17:18.228Z"
 }
 */

/**
 * @api {put} api/v1/qna/{id} 3. PUT : Qna Update
 * @apiName QnaUpdate
 * @apiGroup Qna
 * @apiUse ApiHeaderAuthorization
 * @apiDescription payload의 값이 수정될 object
 *
 * @apiParam {String} id                      [QueryParams] 변경할 qna id
 * @apiParam {String} [writer]                [payload] writer
 * @apiParam {String} [text]                  [payload] text
 * @apiParam {String} [mysession_id]          [payload] 참고하는 qna 세션 id
 * @apiParam {Number} [secret]                [payload] null or 1 ( null = 공개, 1 = 익명)
 *
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 {
    "count": 1
 }
 */

/**
 * @api {delete} api/v1/qna/{id} 4. Delete : Qna Delete
 * @apiName QnaDelete
 * @apiGroup Qna
 * @apiUse ApiHeaderAuthorization
 *
 * @apiParam {String} id                      [QueryParams] 삭제할 qna id
 *
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 {
    "count": 1
 }
 */


/**
 * @api {get} api/v1/qnacomment/{id?}?qna_id=? 1. GET : Qnacomment Select
 * @apiName QnacommentSelect
 * @apiGroup QnaComment
 * @apiUse ApiHeaderAuthorization
 *
 * @apiParam {String} [id]              [QueryParams] id(primary key) / id가 넘어올 경우 특정 Qnacomment 리턴, 그렇지 않으면 Qnacomment list 리턴
 * @apiParam {String} qna_id            [QueryString] qna_id
 *
 *
 * @apiSuccessExample Success-Response:
 *     case : id Exist
 *     HTTP/1.1 200 OK
 *     참고 : http://ec2-54-180-89-73.ap-northeast-2.compute.amazonaws.com:1337/api/v1/qnacomment/ByWYWjtnHH
 *
 *     case : id not Exist
 *     HTTP/1.1 200 OK
 *     참고 : http://ec2-54-180-89-73.ap-northeast-2.compute.amazonaws.com:1337/api/v1/qnacomment?qna_id=B1KhTXFTQ
 */

/**
 * @api {post} api/v1/qnacomment 2. POST : Qnacomment Insert
 * @apiName QnacommentInsert
 * @apiGroup QnaComment
 * @apiUse ApiHeaderAuthorization
 *
 * @apiParam {String} writer                [payload] writer
 * @apiParam {String} text                  [payload] text
 * @apiParam {String} qna_id                [payload] 참고하는 qna_id
 *
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 {
    "id": "00119408-7c7e-4ea9-b43e-f3a765cceb67",
    "writer": "백대선",
    "qna_id": "VyDeHHotW",
    "text": "안녕하십니",
    "updatedAt": "2019-11-01T09:37:02.504Z",
    "createdAt": "2019-11-01T09:37:02.504Z"
}
 */

/**
 * @api {put} api/v1/qnacomment/{id} 3. PUT : Qnacomment Update
 * @apiName QnacommentUpdate
 * @apiGroup QnaComment
 * @apiUse ApiHeaderAuthorization
 * @apiDescription payload의 값이 수정될 object
 *
 * @apiParam {String} id                      [QueryParams] 변경할 qnacomment id
 * @apiParam {String} [writer]                [payload] writer
 * @apiParam {String} [text]                  [payload] text
 * @apiParam {String} [qna_id]                [payload] 참고하는 qna 세션 id
 *
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 {
    "count": 1
 }
 */

/**
 * @api {delete} api/v1/qnacomment/{id} 4. DELETE : Qnacomment Delete
 * @apiName QnacommentDelete
 * @apiGroup QnaComment
 * @apiUse ApiHeaderAuthorization
 *
 * @apiParam {String} id                      [QueryParams] 삭제할 qnacomment id
 *
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 {
    "count": 1
 }
 */


/**
 * @api {get} api/v1/qnalike/{id?}?qna_id=? 1. GET : Qnalike Select
 * @apiName QnalikeSelect
 * @apiGroup QnaLike
 * @apiUse ApiHeaderAuthorization
 *
 * @apiParam {String} [id]              [QueryParams] id(primary key) / id가 넘어올 경우 특정 Qnalike 리턴, 그렇지 않으면 Qnalike list 리턴
 * @apiParam {String} qna_id            [QueryString] qna_id
 *
 *
 * @apiSuccessExample Success-Response:
 *     case : id Exist
 *     HTTP/1.1 200 OK
 *     참고 : http://ec2-54-180-89-73.ap-northeast-2.compute.amazonaws.com:1337/api/v1/qnalike/j2yJdbhym
 *
 *     case : id not Exist
 *     HTTP/1.1 200 OK
 *     참고 : http://ec2-54-180-89-73.ap-northeast-2.compute.amazonaws.com:1337/api/v1/qnalike?qna_id=heelwow
 */

/**
 * @api {post} api/v1/qnalike 2. POST : Qnalike Insert
 * @apiName QnalikeInsert
 * @apiGroup QnaLike
 * @apiUse ApiHeaderAuthorization
 *
 * @apiParam {String} writer                [payload] writer
 * @apiParam {String} qna_id                [payload] 참고하는 qna_id
 *
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 {
    "id": "aee682f1-ccbb-480f-80b9-29fee01e3c14",
    "writer": "백대선",
    "qna_id": "VyDeHHotW",
    "updatedAt": "2019-11-01T09:44:58.788Z",
    "createdAt": "2019-11-01T09:44:58.788Z"
}
 */

/**
 * @api {put} api/v1/qnalike/{id} 3. PUT : Qnalike Update
 * @apiName QnalikeUpdate
 * @apiGroup QnaLike
 * @apiUse ApiHeaderAuthorization
 * @apiDescription payload의 값이 수정될 object
 *
 * @apiParam {String} id                      [QueryParams] 변경할 qnalike id
 * @apiParam {String} [writer]                [payload] writer
 * @apiParam {String} [qna_id]                [payload] 참고하는 qna 세션 id
 *
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 {
    "count": 1
 }
 */

/**
 * @api {delete} api/v1/qnalike/{id} 4. DELETE : Qnalike Delete
 * @apiName QnalikeDelete
 * @apiGroup QnaLike
 * @apiUse ApiHeaderAuthorization
 *
 * @apiParam {String} id                      [QueryParams] 삭제할 qnalike id
 *
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 {
    "count": 1
 }
 */


/**
 * @api {get} api/v1/classroom/{id?}?username=?&order=?&limit=?&page=?&title=? 1. GET : Classroom Select
 * @apiName ClassroomSelect
 * @apiGroup Classroom
 * @apiUse ApiHeaderAuthorization
 * @apiDescription QueryParams의 id 값이 넘어오지 않을 경우만 QueryString -> username, order, limit, page 필수 조건 체크 함.
 *
 * @apiParam {String} [id]              [QueryParams] id(primary key) / id가 넘어올 경우 특정 Classroom 리턴, 그렇지 않으면 Classroom list 리턴
 * @apiParam {String} username          [QueryString] username
 * @apiParam {String} order             [QueryString] 'created_asc' || 'created_desc' || 'title_asc' || 'title_desc'  (넷중 다른 텍스트가 넘어올 경우 joi로 err처리)
 * @apiParam {String} limit             [QueryString] 한 페이지에 보여질 Classroom 수
 * @apiParam {String} page              [QueryString] 현재 페이지 수
 * @apiParam {String} [title]           [QueryString] title 검색 조건
 *
 *
 * @apiSuccessExample Success-Response:
 *     case : id Exist
 *     HTTP/1.1 200 OK
 *     참고 : http://ec2-54-180-89-73.ap-northeast-2.compute.amazonaws.com:1337/api/v1/classroom/ry112JaHS
 *
 *     case : id not Exist
 *     HTTP/1.1 200 OK
 *     참고 : http://ec2-54-180-89-73.ap-northeast-2.compute.amazonaws.com:1337/api/v1/classroom?username=baek_dae@naver.com&page=1&limit=10&order=created_desc
 */

/**
 * @api {post} api/v1/classroom 2. POST : Classroom Insert
 * @apiName ClassroomInsert
 * @apiGroup Classroom
 * @apiUse ApiHeaderAuthorization
 *
 * @apiParam {String}   title                   [payload] title
 * @apiParam {String}   gubun                   [payload] gubun
 * @apiParam {Date}     st_date                 [payload] 클래스룸 시작일 ( format / 'YYYY-MM-DD')
 * @apiParam {Date}     ed_date                 [payload] 클래스룸 종료일 ( format / 'YYYY-MM-DD')
 * @apiParam {String}   att_info                [payload] 참여자 정보 리스트 ( JSON.stringify : {"sosok":false,"nick":true,"name":false,"deptno":false,"hp":false,"email":false} )
 * @apiParam {String}     lbi                   [payload] Large Logo
 * @apiParam {String}     sbi                   [payload] Small Logo
 * @apiParam {String}     theme                     [payload] theme
 * @apiParam {Boolean}     hasqna                [payload] Q&A 사용 여부
 * @apiParam {Boolean}     hasquiz               [payload] Live Quiz 사용 여부
 * @apiParam {Boolean}     haspoll               [payload] Live Poll 사용 여부
 * @apiParam {Boolean}     hasshare               [payload] Live Share 사용 여부
 * @apiParam {Boolean}     hasspot              [payload] Live Spot 사용 여부
 * @apiParam {Boolean}     hassurvey               [payload] Survey 사용 여부
 * @apiParam {Boolean}     hasreport               [payload] Report 생성 여부
 * @apiParam {Number}     maxucnt               [payload] 클래스룸 최대 참여자 수
 * @apiParam {Number}     minucnt               [payload] 클래스룸 최소 참여자 수
 * @apiParam {String}     owner_id_str                     [payload] 클래스룸 소유자
 * @apiParam {String}     owner_group                     [payload] 클래스룸 소유자 그룹
 * @apiParam {String}     welcome                     [payload] 클래스룸 환영 메시지
 * @apiParam {String}     outertitle                     [payload] link title
 * @apiParam {String}     outerlink                     [payload] link url
 * @apiParam {Number}     totalusers                     [payload] 리포트 생성시 totalusers
 * @apiParam {Number}     initcount                     [payload] 초기화 횟수
 * @apiParam {String}     privacy_collect                     [payload] 제3자 동의 여부(기업)
 * @apiParam {Number}     password                     [payload] 클래스룸 비밀번호 설정
 *
 *
 *
 *
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 {
    "id": "7afe325c-ce61-429e-a447-cc488ace05bf",
    "title": "테스트 클래스룸",
    "gubun": "A",
    "st_date": "2019-11-01T00:00:00.000Z",
    "ed_date": "2019-12-01T00:00:00.000Z",
    "att_info": "{\"sosok\":false,\"nick\":true,\"name\":false,\"deptno\":false,\"hp\":false,\"email\":false}",
    "theme": "A",
    "owner_id_str": "baek_dae@naver.com",
    "haspoll": true,
    "hasqna": true,
    "hasquiz": true,
    "hassurvey": true,
    "hasspot": true,
    "hasshare": true,
    "updatedAt": "2019-11-01T11:41:11.580Z",
    "createdAt": "2019-11-01T11:41:11.580Z",
    "lbi": null,
    "sbi": null,
    "maxucnt": null,
    "minucnt": null,
    "welcome": null,
    "outertitle": null,
    "outerlink": null,
    "totalusers": 0,
    "hasreport": false,
    "initcount": 0,
    "owner_group": null,
    "privacy_collect": null,
    "password": null
}
 */

/**
 * @api {put} api/v1/classroom/{id} 3. PUT : Classroom Update
 * @apiName ClassroomUpdate
 * @apiGroup Classroom
 * @apiUse ApiHeaderAuthorization
 * @apiDescription payload의 값이 수정될 object
 *
 * @apiParam {String} id                      [QueryParams] 변경할 classroom id
 * @apiParam {String}   title                   [payload] title
 * @apiParam {String}   gubun                   [payload] gubun
 * @apiParam {Date}     st_date                 [payload] 클래스룸 시작일 ( format / 'YYYY-MM-DD')
 * @apiParam {Date}     ed_date                 [payload] 클래스룸 종료일 ( format / 'YYYY-MM-DD')
 * @apiParam {String}   att_info                [payload] 참여자 정보 리스트 ( JSON.stringify : {"sosok":false,"nick":true,"name":false,"deptno":false,"hp":false,"email":false} )
 * @apiParam {String}     lbi                   [payload] Large Logo
 * @apiParam {String}     sbi                   [payload] Small Logo
 * @apiParam {String}     theme                     [payload] theme
 * @apiParam {Boolean}     hasqna                [payload] Q&A 사용 여부
 * @apiParam {Boolean}     hasquiz               [payload] Live Quiz 사용 여부
 * @apiParam {Boolean}     haspoll               [payload] Live Poll 사용 여부
 * @apiParam {Boolean}     hasshare               [payload] Live Share 사용 여부
 * @apiParam {Boolean}     hasspot              [payload] Live Spot 사용 여부
 * @apiParam {Boolean}     hassurvey               [payload] Survey 사용 여부
 * @apiParam {Boolean}     hasreport               [payload] Report 생성 여부
 * @apiParam {Number}     maxucnt               [payload] 클래스룸 최대 참여자 수
 * @apiParam {Number}     minucnt               [payload] 클래스룸 최소 참여자 수
 * @apiParam {String}     owner_id_str                     [payload] 클래스룸 소유자
 * @apiParam {String}     owner_group                     [payload] 클래스룸 소유자 그룹
 * @apiParam {String}     welcome                     [payload] 클래스룸 환영 메시지
 * @apiParam {String}     outertitle                     [payload] link title
 * @apiParam {String}     outerlink                     [payload] link url
 * @apiParam {Number}     totalusers                     [payload] 리포트 생성시 totalusers
 * @apiParam {Number}     initcount                     [payload] 초기화 횟수
 * @apiParam {String}     privacy_collect                     [payload] 제3자 동의 여부(기업)
 * @apiParam {Number}     password                     [payload] 클래스룸 비밀번호 설정
 *
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 {
    "count": 1
 }
 */

/**
 * @api {delete} api/v1/classroom/{id} 4. Delete : Classroom Delete
 * @apiName ClassroomDelete
 * @apiGroup Classroom
 * @apiUse ApiHeaderAuthorization
 *
 * @apiParam {String} id                      [QueryParams] 삭제할 classroom id
 *
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 {
    "count": 1
 }
 */




















/**
 * @api {get} api/v1/paper/{id?}?classroom_id=? 1. GET : Paper Select
 * @apiName PaperSelect
 * @apiGroup Paper
 * @apiUse ApiHeaderAuthorization
 *
 * @apiParam {String} [id]                  [QueryParams] id(primary key) / id가 넘어올 경우 특정 Paper 리턴, 그렇지 않으면 Paper list 리턴
 * @apiParam {String} classroom_id           [QueryString] classroom_id
 * @apiParam {String} [flag]           [QueryString]
 *
 *
 * @apiSuccessExample Success-Response:
 *     case : id Exist
 *     HTTP/1.1 200 OK
 *     참고 : http://ec2-54-180-89-73.ap-northeast-2.compute.amazonaws.com:1337/api/v1/paper/r1BRl4rkLS
 *
 *     case : id not Exist
 *     HTTP/1.1 200 OK
 *     참고 : http://ec2-54-180-89-73.ap-northeast-2.compute.amazonaws.com:1337/api/v1/paper?classroom_id=rJfd7VB1UB
 */

/**
 * @api {post} api/v1/paper 2. POST : Paper Insert
 * @apiName PaperInsert
 * @apiGroup Paper
 * @apiUse ApiHeaderAuthorization
 *
 * @apiParam {Number} index                [payload] index
 * @apiParam {String} title                [payload] title
 * @apiParam {String} flag                [payload] flag
 * @apiParam {String} welcome                [payload] 참고하는 welcome
 * @apiParam {String} classroom_id                [payload] 참고하는 classroom_id
 *
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 {
    "id": "44fed1d8-27c5-49c7-a1c1-b1eae8aa8f4f",
    "index": 1,
    "title": "hello world",
    "flag": "survey",
    "welcome": "안녕하세여",
    "classroom_id": "rJfd7VB1UB",
    "updatedAt": "2019-11-01T11:55:31.496Z",
    "createdAt": "2019-11-01T11:55:31.496Z"
}
 */

/**
 * @api {put} api/v1/paper/{id} 3. PUT : Paper Update
 * @apiName PaperUpdate
 * @apiGroup Paper
 * @apiUse ApiHeaderAuthorization
 * @apiDescription payload의 값이 수정될 object
 *
 *
 * @apiParam {String} id                      [QueryParams] 변경할 paper id
 * @apiParam {Number} index                [payload] index
 * @apiParam {String} title                [payload] title
 * @apiParam {String} flag                [payload] flag
 * @apiParam {String} welcome                [payload] 참고하는 welcome
 * @apiParam {String} classroom_id                [payload] 참고하는 classroom_id
 *
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 {
    "count": 1
 }
 */

/**
 * @api {delete} api/v1/paper/{id} 4. DELETE : Paper Delete
 * @apiName PaperDelete
 * @apiGroup Paper
 * @apiUse ApiHeaderAuthorization
 *
 * @apiParam {String} id                      [QueryParams] 삭제할 paper id
 *
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 {
    "count": 1
 }
 */

/**
 * @api {get} api/v1/item/{id?}?paper_id=? 1. GET : Item Select
 * @apiName ItemSelect
 * @apiGroup Item
 * @apiUse ApiHeaderAuthorization
 *
 * @apiParam {String} [id]                  [QueryParams] id(primary key) / id가 넘어올 경우 특정 Item 리턴, 그렇지 않으면 Item list 리턴
 * @apiParam {String} paper_id           [QueryString] paper_id
 *
 *
 * @apiSuccessExample Success-Response:
 *     case : id Exist
 *     HTTP/1.1 200 OK
 *     참고 : http://ec2-54-180-89-73.ap-northeast-2.compute.amazonaws.com:1337/api/v1/item/rykg2VNH1LS
 *
 *     case : id not Exist
 *     HTTP/1.1 200 OK
 *     참고 : http://ec2-54-180-89-73.ap-northeast-2.compute.amazonaws.com:1337/api/v1/item?paper_id=H1znNNByIB
 */

/**
 * @api {post} api/v1/item 2. POST : Item Insert
 * @apiName ItemInsert
 * @apiGroup Item
 * @apiUse ApiHeaderAuthorization
 *
 * @apiParam {String} title                [payload] title
 * @apiParam {String} deco                [payload] deco
 * @apiParam {Number} timer                [payload] timer
 * @apiParam {String} status                [payload] status
 * @apiParam {Number} point                [payload] point
 * @apiParam {Number} index                [payload] index
 * @apiParam {String} answer                [payload] answer
 * @apiParam {String} jimun_multi                [payload] jimun_multi
 * @apiParam {String} paper_id                [payload] 참고하는 paper_id
 * @apiParam {String} answer_flag                [payload] answer_flag
 * @apiParam {Boolean} required                [payload] 필수여부
 * @apiParam {Boolean} required                [payload] 리커트 척도 사용 여부
 *
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
{
    "id": "48b78229-c105-4c28-953c-614c37159724",
    "title": "1번문제",
    "deco": "Q",
    "timer": 10,
    "status": "null",
    "point": 1,
    "index": 1,
    "answer": "null",
    "jimun_multi": "null",
    "paper_id": "H1znNNByIB",
    "answer_flag": "A",
    "required": true,
    "score": true,
    "updatedAt": "2019-11-01T12:11:41.460Z",
    "createdAt": "2019-11-01T12:11:41.460Z"
}
 */

/**
 * @api {put} api/v1/item/{id} 3. PUT : Item Update
 * @apiName ItemUpdate
 * @apiGroup Item
 * @apiUse ApiHeaderAuthorization
 * @apiDescription payload의 값이 수정될 object
 *
 *
 * @apiParam {String} id                      [QueryParams] 변경할 item id
 * @apiParam {String} title                [payload] title
 * @apiParam {String} deco                [payload] deco
 * @apiParam {Number} timer                [payload] timer
 * @apiParam {String} status                [payload] status
 * @apiParam {Number} point                [payload] point
 * @apiParam {Number} index                [payload] index
 * @apiParam {String} answer                [payload] answer
 * @apiParam {String} jimun_multi                [payload] jimun_multi
 * @apiParam {String} paper_id                [payload] 참고하는 paper_id
 * @apiParam {String} answer_flag                [payload] answer_flag
 * @apiParam {Boolean} required                [payload] 필수여부
 * @apiParam {Boolean} required                [payload] 리커트 척도 사용 여부
 *
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 {
    "count": 1
 }
 */

/**
 * @api {delete} api/v1/item/{id} 4. DELETE : Item Delete
 * @apiName ItemDelete
 * @apiGroup Item
 * @apiUse ApiHeaderAuthorization
 *
 * @apiParam {String} id                      [QueryParams] 삭제할 item id
 *
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 {
    "count": 1
 }
 */








/**
 * @api {get} api/v1/itemdetail/{id?}?item_id=? 1. GET : Itemdetail Select
 * @apiName ItemdetailSelect
 * @apiGroup Itemdetail
 * @apiUse ApiHeaderAuthorization
 *
 * @apiParam {String} [id]                  [QueryParams] id(primary key) / id가 넘어올 경우 특정 Itemdetail 리턴, 그렇지 않으면 Itemdetail list 리턴
 * @apiParam {String} paper_id           [QueryString] item_id
 *
 *
 * @apiSuccessExample Success-Response:
 *     case : id Exist
 *     HTTP/1.1 200 OK
 *     참고 : http://ec2-54-180-89-73.ap-northeast-2.compute.amazonaws.com:1337/api/v1/itemdetail/r1YZn4VSJUS
 *
 *     case : id not Exist
 *     HTTP/1.1 200 OK
 *     참고 : http://ec2-54-180-89-73.ap-northeast-2.compute.amazonaws.com:1337/api/v1/itemdetail?item_id=rykg2VNH1LS
 */

/**
 * @api {post} api/v1/itemdetail 2. POST : Itemdetail Insert
 * @apiName ItemdetailInsert
 * @apiGroup Itemdetail
 * @apiUse ApiHeaderAuthorization
 *
 * @apiParam {String} title                [payload] title
 * @apiParam {Number} index                [payload] index
 * @apiParam {String} item_id                [payload] 참고하는 item_id
 * @apiParam {Number} point                [payload] 문항별 리커트 점수
 *
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 {
    "id": "ce9056ee-e38b-4bd2-b6c0-90d10ddbbc89",
    "title": "1번복기",
    "index": 13,
    "item_id": "rykg2VNH1LS",
    "point": 3,
    "updatedAt": "2019-11-01T12:21:14.798Z",
    "createdAt": "2019-11-01T12:21:14.798Z"
}
 */

/**
 * @api {put} api/v1/itemdetail/{id} 3. PUT : Itemdetail Update
 * @apiName ItemdetailUpdate
 * @apiGroup Itemdetail
 * @apiUse ApiHeaderAuthorization
 * @apiDescription payload의 값이 수정될 object
 *
 *
 * @apiParam {String} id                      [QueryParams] 변경할 itemdetail id
 * @apiParam {String} title                [payload] title
 * @apiParam {Number} index                [payload] index
 * @apiParam {String} item_id                [payload] 참고하는 item_id
 * @apiParam {Number} point                [payload] 문항별 리커트 점수
 *
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 {
    "count": 1
 }
 */

/**
 * @api {delete} api/v1/itemdetail/{id} 4. DELETE : Itemdetail Delete
 * @apiName ItemdetailDelete
 * @apiGroup Itemdetail
 * @apiUse ApiHeaderAuthorization
 *
 * @apiParam {String} id                      [QueryParams] 삭제할 itemdetail id
 *
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 {
    "count": 1
 }
 */
