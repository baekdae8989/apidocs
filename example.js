/**
 * @apiDefine ApiHeaderAuthorization
 * @apiHeader {String} Authorization JWT
 */



// Classroom 관련 API
/**
 * @api {get} api/v1/classroom/{id?}?username=?&order=?&limit=?&page=?&title=? 1. GET : Classroom Select
 * @apiName ClassroomSelect
 * @apiGroup Classroom
 * @apiUse ApiHeaderAuthorization
 * @apiDescription QueryParams의 id 값이 넘어오지 않을 경우만 QueryString -> username, order, limit, page 필수 조건 체크 함.
 *
 * @apiParam {String} [id]                  [QueryParams] id(primary key) / id가 넘어올 경우 특정 Classroom 리턴, 그렇지 않으면 Classroom list 리턴
 * @apiParam {String} username              [QueryString] username
 * @apiParam {String} order                 [QueryString] 'created_asc' || 'created_desc' || 'title_asc' || 'title_desc'  (넷중 다른 텍스트가 넘어올 경우 joi로 err처리)
 * @apiParam {String} [limit]               [QueryString] 한 페이지에 보여질 Classroom 수
 * @apiParam {String} [page]                [QueryString] 현재 페이지 수
 * @apiParam {String} [title]               [QueryString] title 검색 조건 포함.
 *
 *
 * @apiSuccessExample Success-Response:
case : id Exist
HTTP/1.1 200 OK
참고 : http://apidoc.weliveon.net:1337/api/v1/classroom/16771ba8-21f0-4560-a4d5-e9d887e535cd
 *
case : id not Exist
HTTP/1.1 200 OK
참고 : http://apidoc.weliveon.net:1337/api/v1/classroom?username=baek_dae@naver.com&page=1&limit=10&order=created_desc
 */

/**
 * @api {post} api/v1/classroom 2. POST : Classroom Insert
 * @apiName ClassroomInsert
 * @apiGroup Classroom
 * @apiUse ApiHeaderAuthorization
 *
 * @apiParam {String}   title                           [payload] title
 * @apiParam {Date}     st_date                         [payload] 클래스룸 시작일 ( format / 'YYYY-MM-DD')
 * @apiParam {Date}     ed_date                         [payload] 클래스룸 종료일 ( format / 'YYYY-MM-DD')
 * @apiParam {String}   att_info                        [payload] 참여자 정보 리스트 ("{\"default_info\":\"닉네임\",\"dept\":true,\"dept_no\":true,\"email\":true,\"hp\":true,\"name\":true}")
 * @apiParam {String}     logo                          [payload] 클래스룸 로고 ("{\"name\":\"BJyjSd3e.PNG\",\"url\":\"https://weliveon2.s3.ap-northeast-2.amazonaws.com/16771ba8-21f0-4560-a4d5-e9d887e535cd/hnmroOc6.PNG\"}")
 * @apiParam {Boolean}     hasreport                    [payload] Report 생성 여부
 * @apiParam {String}     owner_id_str                  [payload] 클래스룸 소유자
 * @apiParam {String}     owner_group                   [payload] 클래스룸 소유자 그룹
 * @apiParam {String}     welcome                       [payload] 클래스룸 환영 메시지
 * @apiParam {String}     privacy_collect               [payload] 제3자 동의 여부(기업명)
 * @apiParam {Number}     password                      [payload] 클래스룸 비밀번호 설정
 *
 *
 *
 *
 *
 * @apiSuccessExample Success-Response:
HTTP/1.1 200 OK
{
    "id": "16771ba8-21f0-4560-a4d5-e9d887e535cd",
    "title": "WELIVEON 2.0 TEST",
    "st_date": "2020-03-05T00:00:00.000Z",
    "ed_date": "2020-04-30T00:00:00.000Z",
    "att_info": "{\"default_info\":\"닉네임\",\"dept\":true,\"dept_no\":true,\"email\":true,\"hp\":true,\"name\":true}",
    "logo": "{\"name\":\"BJyjSd3e.PNG\",\"url\":\"https://weliveon2.s3.ap-northeast-2.amazonaws.com/16771ba8-21f0-4560-a4d5-e9d887e535cd/hnmroOc6.PNG\"}",
    "hasreport": false,
    "owner_id_str": "baek_dae@naver.com",
    "owner_group": null,
    "welcome": "위라이브온 테스트 클래스에 오신 여러분 환영",
    "privacy_collect": "메가넥스트",
    "password": "1234",
    "createdAt": "2020-03-06T05:22:52.033Z",
    "updatedAt": "2020-03-10T02:21:50.161Z"
}
 */

/**
 * @api {put} api/v1/classroom/{id} 3. PUT : Classroom Update
 * @apiName ClassroomUpdate
 * @apiGroup Classroom
 * @apiUse ApiHeaderAuthorization
 * @apiDescription payload의 값이 수정될 object
 *
 * @apiParam {String}   title                           [payload] title
 * @apiParam {Date}     st_date                         [payload] 클래스룸 시작일 ( format / 'YYYY-MM-DD')
 * @apiParam {Date}     ed_date                         [payload] 클래스룸 종료일 ( format / 'YYYY-MM-DD')
 * @apiParam {String}   att_info                        [payload] 참여자 정보 리스트 ("{\"default_info\":\"닉네임\",\"dept\":true,\"dept_no\":true,\"email\":true,\"hp\":true,\"name\":true}")
 * @apiParam {String}     logo                          [payload] 클래스룸 로고 ("{\"name\":\"BJyjSd3e.PNG\",\"url\":\"https://weliveon2.s3.ap-northeast-2.amazonaws.com/16771ba8-21f0-4560-a4d5-e9d887e535cd/hnmroOc6.PNG\"}")
 * @apiParam {Boolean}     hasreport                    [payload] Report 생성 여부
 * @apiParam {String}     owner_id_str                  [payload] 클래스룸 소유자
 * @apiParam {String}     owner_group                   [payload] 클래스룸 소유자 그룹
 * @apiParam {String}     welcome                       [payload] 클래스룸 환영 메시지
 * @apiParam {String}     privacy_collect               [payload] 제3자 동의 여부(기업명)
 * @apiParam {Number}     password                      [payload] 클래스룸 비밀번호 설정
 *
 *
 * @apiSuccessExample Success-Response:
HTTP/1.1 200 OK
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
HTTP/1.1 200 OK
{
    "count": 1
}
 */

/**
 * @api {get} api/v1/classroom/copy/{id} 5. Get : Classroom Copy
 * @apiName ClassroomCopy
 * @apiGroup Classroom
 * @apiUse ApiHeaderAuthorization
 *
 * @apiParam {String} id                      [QueryParams] 복사할 classroom id
 *
 *
 * @apiSuccessExample Success-Response:
HTTP/1.1 200 OK
{
    "id": "64bb138b-e585-4f84-9a72-54ce3e8f30b3",
    "title": "WELIVEON 2.0 TEST_(복사본)",
    "st_date": "2020-03-05T00:00:00.000Z",
    "ed_date": "2020-04-30T00:00:00.000Z",
    "att_info": "{\"default_info\":\"닉네임\",\"dept\":true,\"dept_no\":true,\"email\":true,\"hp\":true,\"name\":true}",
    "logo": "{\"name\":\"BJyjSd3e.PNG\",\"url\":\"https://weliveon2.s3.ap-northeast-2.amazonaws.com/16771ba8-21f0-4560-a4d5-e9d887e535cd/hnmroOc6.PNG\"}",
    "hasreport": false,
    "owner_id_str": "baek_dae@naver.com",
    "owner_group": null,
    "welcome": "위라이브온 테스트 클래스에 오신 여러분 환영",
    "privacy_collect": "메가넥스트",
    "password": "1234",
    "updatedAt": "2020-03-20T08:59:53.883Z",
    "createdAt": "2020-03-20T08:59:53.883Z"
}
 */





// Custom 관련 API
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
 HTTP/1.1 200 OK
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
HTTP/1.1 200 OK
참고 : http://apidoc.weliveon.net:1337/api/v1/custom/home_myclass?username=baek_dae@naver.com
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
HTTP/1.1 200 OK
참고 : http://apidoc.weliveon.net:1337/api/v1/custom/home_myquizset?username=baek_dae@naver.com
 *
 */
/**
 * @api {get} api/v1/custom/qna_shuffle/{paper_id} GET QnaShuffle
 * @apiName QnaShuffle
 * @apiGroup Custom
 * @apiUse ApiHeaderAuthorization
 * @apiDescription Q&A 랜덤하게 하나 가져오는 API
 *
 * @apiParam {String} paper_id [QueryString] paper_id
 *
 * @apiSuccessExample Success-Response:
HTTP/1.1 200 OK
참고 : http://apidoc.weliveon.net:1337/api/v1/custom/qna_shuffle/VyDeHHotW
 *
 */





// File 관련 API
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
HTTP/1.1 200 OK (Expires : 180s)
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
HTTP/1.1 200 OK
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
HTTP/1.1 200 OK
{count : 1}
 *
 */

/**
 * @api {POST} api/v1/file/share/{flag} 4. Share zip, pdf 변환 후 S3 upload
 * @apiName ShareZipConvert
 * @apiGroup File
 * @apiUse ApiHeaderAuthorization
 * @apiDescription zip 방식은 파일 그대로 업로드, pdf 방식은 pdf 이미지를 base64 방식으로 변환하여 전달하여야 함.
 * 1. 서버 업로드 -> zip 방식은 unzip, pdf 방식은 이미지 변환
 * 2. AWS 업로드 -> unzip, 이미지 변환 파일 AWS S3 업로드 후 클라이언트에 response
 * 3. 서버에 남아 있던 파일 삭제. (비동기)
 *
 * @apiParam {String} flag [QueryParams]'pdf' || 'zip' (둘중 다른 텍스트가 넘어올 경우 joi로 err처리)
 * @apiParam {Object} file [payload] share file object
 *
 * @apiSuccessExample Success-Response:
HTTP/1.1 200 OK
{
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




// Item 관련 API
/**
 * @api {get} api/v1/item/{id?}?paper_id=? 1. GET : Item Select
 * @apiName ItemSelect
 * @apiGroup Item
 * @apiUse ApiHeaderAuthorization
 *
 * @apiParam {String} [id]                  [QueryParams] id(primary key) / id가 넘어올 경우 특정 Item 리턴, 그렇지 않으면 Item list 리턴
 * @apiParam {String} paper_id           [QueryString] paper_id
 * @apiParam {String} [index]           [QueryString] index
 *
 *
 * @apiSuccessExample Success-Response:
case : id Exist
HTTP/1.1 200 OK
참고 : http://apidoc.weliveon.net:1337/api/v1/item/d6fc7fb3-95dc-4779-9636-76d6ccde3c35
 *
case : id not Exist
HTTP/1.1 200 OK
참고 : http://apidoc.weliveon.net:1337/api/v1/item?paper_id=61a754b4-fb18-4c25-9396-ea4ab5973c90
 */

/**
 * @api {post} api/v1/item 2. POST : Item Insert
 * @apiName ItemInsert
 * @apiGroup Item
 * @apiUse ApiHeaderAuthorization
 *
 * @apiParam {String} title                [payload] title
 * @apiParam {Number} timer                [payload] timer
 * @apiParam {String} mail_attachment                [payload] mail_attachment
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
HTTP/1.1 200 OK
{
    "id": "d6fc7fb3-95dc-4779-9636-76d6ccde3c35",
    "title": "1번 HR ON X wanted 8-1의 연사가 아닌 사람은 누구인가요?",
    "timer": null,
    "mail_attachment": null,
    "index": 2,
    "answer": "[\"8895f154-54c9-4467-afc9-f681bf1a2a5a\"]",
    "jimun_multi": "[{\"name\":\"스크린샷 2020-01-15 오후 3.11.10.png\",\"url\":\"https://weliveon2.s3.ap-northeast-2.amazonaws.com/77a31cb3-5f02-43e8-9b69-6cfeb25c94fb/lKJVLslY.png\",\"type\":\"image\"},{\"name\":\"file_example_MP3_700KB.mp3\",\"url\":\"https://weliveon2.s3.ap-northeast-2.amazonaws.com/77a31cb3-5f02-43e8-9b69-6cfeb25c94fb/syEk2VDfR.mp3\",\"type\":\"audio\"},{\"name\":\"https://www.youtube.com/watch?v=trI-NsoiBqg&list=RDtrI-NsoiBqg&start_radio=1\",\"type\":\"youtube\",\"url\":\"https://www.youtube.com/watch?v=trI-NsoiBqg&list=RDtrI-NsoiBqg&start_radio=1\"},{\"name\":\"file_example_MP4_640_3MG.mp4\",\"url\":\"https://weliveon2.s3.ap-northeast-2.amazonaws.com/77a31cb3-5f02-43e8-9b69-6cfeb25c94fb/vW2moiUN3.mp4\",\"type\":\"video\"}]",
    "paper_id": "61a754b4-fb18-4c25-9396-ea4ab5973c90",
    "answer_flag": "A",
    "required": true,
    "score": false,
    "createdAt": "2020-03-20T08:59:54.371Z",
    "updatedAt": "2020-03-20T08:59:54.371Z"
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
 * @apiParam {Number} timer                [payload] timer
 * @apiParam {String} mail_attachment                [payload] mail_attachment
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
HTTP/1.1 200 OK
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
HTTP/1.1 200 OK
{
    "count": 1
}
 */

/**
 * @api {get} api/v1/item/update_index/{paper_id}/{current_id}/{current_index}/{change_index} 5. GET : Item Update Index
 * @apiName ItemUpdateIndex
 * @apiGroup Item
 * @apiUse ApiHeaderAuthorization
 * @apiDescription Item 간 드래그&드롭으로 위치가 변경될 때 실행되는 api
 *
 * @apiParam {String} paper_id                      [QueryParams] paper_id
 * @apiParam {String} current_id                      [QueryParams] 현재 index의 id(primary key)
 * @apiParam {String} current_index                      [QueryParams] 현재 index
 * @apiParam {String} change_index                      [QueryParams] 변경될 index
 *
 *
 *
 * @apiSuccessExample Success-Response:
HTTP/1.1 200 OK
{
    "status": "success"
}
 */

/**
 * @api {get} api/v1/item/copy/{id}/{flag} 6. GET : Item Copy
 * @apiName ItemCopy
 * @apiGroup Item
 * @apiUse ApiHeaderAuthorization
 * @apiDescription Item copy (문항 복사) / 현재는 Quiz, Poll, Survey 만 복사 가능
 * Quiz와 Poll,Survey 복사 조건이 다르므로 flag를 QueryPrams에 보내줘야 함.
 *
 * @apiParam {String} id                      [QueryParams] 복사할 item id
 * @apiParam {String} flag                      [QueryParams] quiz || poll || survey
 *
 *
 *
 * @apiSuccessExample Success-Response:
HTTP/1.1 200 OK
{
    "id": "a3b188d6-1130-4eff-b053-53f5f1051087",
    "title": "1번 HR ON X wanted 8-1의 연사가 아닌 사람은 누구인가요?_(복사본)",
    "timer": null,
    "mail_attachment": null,
    "index": 3,
    "answer": "[\"7e004b4a-ab9b-409e-bdb5-7ed4b730ae93\"]",
    "jimun_multi": "[{\"name\":\"스크린샷 2020-01-15 오후 3.11.10.png\",\"url\":\"https://weliveon2.s3.ap-northeast-2.amazonaws.com/77a31cb3-5f02-43e8-9b69-6cfeb25c94fb/lKJVLslY.png\",\"type\":\"image\"},{\"name\":\"file_example_MP3_700KB.mp3\",\"url\":\"https://weliveon2.s3.ap-northeast-2.amazonaws.com/77a31cb3-5f02-43e8-9b69-6cfeb25c94fb/syEk2VDfR.mp3\",\"type\":\"audio\"},{\"name\":\"https://www.youtube.com/watch?v=trI-NsoiBqg&list=RDtrI-NsoiBqg&start_radio=1\",\"type\":\"youtube\",\"url\":\"https://www.youtube.com/watch?v=trI-NsoiBqg&list=RDtrI-NsoiBqg&start_radio=1\"},{\"name\":\"file_example_MP4_640_3MG.mp4\",\"url\":\"https://weliveon2.s3.ap-northeast-2.amazonaws.com/77a31cb3-5f02-43e8-9b69-6cfeb25c94fb/vW2moiUN3.mp4\",\"type\":\"video\"}]",
    "paper_id": "61a754b4-fb18-4c25-9396-ea4ab5973c90",
    "answer_flag": "A",
    "required": true,
    "score": false
}
 */






// Itemdetail 관련 API
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
case : id Exist
HTTP/1.1 200 OK
참고 : http://apidoc.weliveon.net:1337/api/v1/itemdetail/7efdcccd-577e-480c-9b54-71e74e7ecf06
 *
case : id not Exist
HTTP/1.1 200 OK
참고 : http://apidoc.weliveon.net:1337/api/v1/itemdetail?item_id=82fbcc3b-63e1-4678-a227-7f57acb90de8
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
 * @apiParam {String} bogitype                [payload] text || image
 * @apiParam {String} image                [payload] bogitype image인 경우  ex) {"type":"image","target":"https://weliveon2.s3.ap-northeast-2.amazonaws.com/S4VGehNE/
 * 1.png"}
 *
 *
 * @apiSuccessExample Success-Response:
HTTP/1.1 200 OK
{
    "id": "d25cc0a4-6347-4891-9810-37e59ca00702",
    "image": "{\"type\":\"image\",\"target\":\"https://weliveon2.s3.ap-northeast-2.amazonaws.com/S4VGehNE/1.png\"}",
    "title": "hello",
    "index": 1,
    "item_id": "rykg2VNH1LS",
    "point": 3,
    "bogitype": "image",
    "updatedAt": "2019-11-06T01:56:09.964Z",
    "createdAt": "2019-11-06T01:56:09.964Z"
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
* @apiParam {String} bogitype                [payload] text || image
 * @apiParam {String} image                [payload] bogitype image인 경우  ex) {"type":"image","target":"https://weliveon2.s3.ap-northeast-2.amazonaws.com/S4VGehNE/
 *
 *
 * @apiSuccessExample Success-Response:
HTTP/1.1 200 OK
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
HTTP/1.1 200 OK
{
    "count": 1
}
 */





// Paper 관련 API
/**
 * @api {get} api/v1/paper/{id?}?classroom_id=? 1. GET : Paper Select
 * @apiName PaperSelect
 * @apiGroup Paper
 * @apiUse ApiHeaderAuthorization
 *
 * @apiParam {String} [id]                      [QueryParams] id(primary key) / id가 넘어올 경우 특정 Paper 리턴, 그렇지 않으면 Paper list 리턴
 * @apiParam {String} classroom_id              [QueryString] classroom_id
 * @apiParam {String} [flag]                    [QueryString] flag
 *
 *
 * @apiSuccessExample Success-Response:
case : id Exist
HTTP/1.1 200 OK
참고 : http://apidoc.weliveon.net:1337/api/v1/paper/05bba2b4-d31e-46b4-8e45-13a6793d39fb
 *
case : id not Exist
HTTP/1.1 200 OK
참고 : http://apidoc.weliveon.net:1337/api/v1/paper?classroom_id=64bb138b-e585-4f84-9a72-54ce3e8f30b3
 */

/**
 * @api {post} api/v1/paper 2. POST : Paper Insert
 * @apiName PaperInsert
 * @apiGroup Paper
 * @apiUse ApiHeaderAuthorization
 *
 * @apiParam {Number} index                [payload] index
 * @apiParam {String} title                [payload] title
 * @apiParam {String} flag                [payload] flag ( quiz || poll || qna || share || spot || timetable )
 * @apiParam {String} subflag                [payload] subflag ( quiz일 경우 live || survival ||non_live ) ( poll 일 경우 live || survey )
 * @apiParam {String} welcome_text                [payload] poll > survey 일 경우 환영 메시지
 * @apiParam {String} welcome_image                [payload] poll > survey 일 경우 환영 이미지
 * @apiParam {String} timetable_date                [payload] timetable 일 경우 시간 값.
 * @apiParam {String} classroom_id                [payload] 참고하는 classroom_id
 *
 *
 * @apiSuccessExample Success-Response:
HTTP/1.1 200 OK
{
    "id": "05bba2b4-d31e-46b4-8e45-13a6793d39fb",
    "index": 9,
    "title": "만족도 조사 (Survey)",
    "classroom_id": "64bb138b-e585-4f84-9a72-54ce3e8f30b3",
    "flag": "poll",
    "subflag": "survey",
    "welcome_text": "본 설문조사는 여러분들이 본 과정에 참가하면서 어떤 생각이나 느낌을 가지고 있는지 파악하여 향후 효과적인 교육과정을 설계하는데 필요한 자료를 확보하기 위한 것입니다. 각 설문에 대해 느낀 점을 솔직하게 응답해 주시기 바랍니다.",
    "welcome_image": "{\"name\":\"94ea115a9b5f1e9e5eeb37d2a628f16a.jpg\",\"url\":\"https://weliveon2.s3.ap-northeast-2.amazonaws.com/9e23e460-40cf-4742-b3c6-1fcb898a1c8d/2W6KQ8Ce.jpg\"}",
    "timetable_date": null,
    "createdAt": "2020-03-20T08:59:53.901Z",
    "updatedAt": "2020-03-20T08:59:53.901Z"
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
 * @apiParam {String} flag                [payload] flag ( quiz || poll || qna || share || spot || timetable )
 * @apiParam {String} subflag                [payload] subflag ( quiz일 경우 live || survival ||non_live ) ( poll 일 경우 live || survey )
 * @apiParam {String} welcome_text                [payload] poll > survey 일 경우 환영 메시지
 * @apiParam {String} welcome_image                [payload] poll > survey 일 경우 환영 이미지
 * @apiParam {String} timetable_date                [payload] timetable 일 경우 시간 값.
 * @apiParam {String} classroom_id                [payload] 참고하는 classroom_id
 *
 *
 * @apiSuccessExample Success-Response:
HTTP/1.1 200 OK
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
HTTP/1.1 200 OK
{
    "count": 1
}
 */

/**
 * @api {get} api/v1/paper/update_index/{classroom_id}/{current_id}/{current_index}/{change_index} 5. GET : Paper Update Index
 * @apiName PaperUpdateIndex
 * @apiGroup Paper
 * @apiUse ApiHeaderAuthorization
 * @apiDescription paper set 간 드래그&드롭으로 위치가 변경될 때 실행되는 api
 *
 * @apiParam {String} classroom_id                      [QueryParams] classroom_id
 * @apiParam {String} current_id                      [QueryParams] 현재 index의 id(primary key)
 * @apiParam {String} current_index                      [QueryParams] 현재 index
 * @apiParam {String} change_index                      [QueryParams] 변경될 index
 *
 *
 *
 * @apiSuccessExample Success-Response:
HTTP/1.1 200 OK
{
    "status": "success"
}
 */

/**
 * @api {get} api/v1/paper/copy/{id} 6. GET : Paper Copy
 * @apiName PaperCopy
 * @apiGroup Paper
 * @apiUse ApiHeaderAuthorization
 *
 * @apiParam {String} id                      [QueryParams] 복사할 paper id
 *
 *
 *
 * @apiSuccessExample Success-Response:
HTTP/1.1 200 OK
{
    "id": "05bba2b4-d31e-46b4-8e45-13a6793d39fb",
    "index": 9,
    "title": "만족도 조사 (Survey)",
    "classroom_id": "64bb138b-e585-4f84-9a72-54ce3e8f30b3",
    "flag": "poll",
    "subflag": "survey",
    "welcome_text": "본 설문조사는 여러분들이 본 과정에 참가하면서 어떤 생각이나 느낌을 가지고 있는지 파악하여 향후 효과적인 교육과정을 설계하는데 필요한 자료를 확보하기 위한 것입니다. 각 설문에 대해 느낀 점을 솔직하게 응답해 주시기 바랍니다.",
    "welcome_image": "{\"name\":\"94ea115a9b5f1e9e5eeb37d2a628f16a.jpg\",\"url\":\"https://weliveon2.s3.ap-northeast-2.amazonaws.com/9e23e460-40cf-4742-b3c6-1fcb898a1c8d/2W6KQ8Ce.jpg\"}",
    "timetable_date": null,
    "createdAt": "2020-03-20T08:59:53.901Z",
    "updatedAt": "2020-03-20T08:59:53.901Z"
}
 */

/**
 * @api {get} api/v1/paper/join/{classroom_id} 7. GET : Paper > Item > Itemdetail join
 * @apiName PaperJoin
 * @apiGroup Paper
 * @apiUse ApiHeaderAuthorization
 *
 * @apiParam {String} id                      [QueryParams] classroom_id
 *
 *
 *
 * @apiSuccessExample Success-Response:
HTTP/1.1 200 OK
참고 : http://apidoc.weliveon.net:1337/api/v1/paper?classroom_id=64bb138b-e585-4f84-9a72-54ce3e8f30b3
*/






// Qna 관련 API
/**
 * @api {get} api/v1/qna/{id?}?paper_id=?&order=?&limit=?&page=?&text=?&like_count=?&comment_count=? 1. GET : Qna Select
 * @apiName QnaSelect
 * @apiGroup Qna
 * @apiUse ApiHeaderAuthorization
 * @apiDescription QueryParams의 id 값이 넘어오지 않을 경우만 QueryString -> paper_id, order, limit, page 필수 조건 체크 함.
 *
 * @apiParam {String} [id]              [QueryParams] id(primary key) / id가 넘어올 경우 특정 Qna 리턴, 그렇지 않으면 Qna list 리턴
 * @apiParam {String} paper_id      [QueryString] paper_id
 * @apiParam {String} order             [QueryString] 'favor' || 'recently' (둘중 다른 텍스트가 넘어올 경우 joi로 err처리)
 * @apiParam {String} limit             [QueryString] 한 페이지에 보여질 Qna 수
 * @apiParam {String} page              [QueryString] 현재 페이지 수
 * @apiParam {String} [text]            [QueryString] text 검색 조건
 * @apiParam {String} [like_count]      [QueryString] like_count 이상 검색 조건
 * @apiParam {String} [comment_count]   [QueryString] comment_count 이상 검색 조건
 *
 *
 * @apiSuccessExample Success-Response:
case : id Exist
HTTP/1.1 200 OK
참고 : http://apidoc.weliveon.net:1337/api/v1/qna/SySgp35J8
 *
case : id not Exist
HTTP/1.1 200 OK
참고 : http://apidoc.weliveon.net:1337/api/v1/qna?paper_id=00dd5861-3ea0-461e-9d5d-cd8052704368&page=1&limit=12&order=favor
 */

/**
 * @api {post} api/v1/qna 2. POST : Qna Insert
 * @apiName QnaInsert
 * @apiGroup Qna
 * @apiUse ApiHeaderAuthorization
 *
 * @apiParam {String} writer                [payload] writer
 * @apiParam {String} text                  [payload] text
 * @apiParam {String} paper_id          [payload] 참고하는 qna 세션 id
 * @apiParam {Number} secret                [payload] 0 or 1 ( 0 = 공개, 1 = 익명)
 *
 *
 * @apiSuccessExample Success-Response:
HTTP/1.1 200 OK
{
    "id": "SySgp35J8",
    "writer": "메가스터디컴퓨터 박민정",
    "text": "2020년에는 메가스터디컴퓨터아카데미에\n학생들이 넘쳐났으면 좋겠습니다!!!!",
    "secret": 0,
    "paper_id": "00dd5861-3ea0-461e-9d5d-cd8052704368",
    "createdAt": "2020-01-02T00:44:29.183Z",
    "updatedAt": "2020-01-02T00:44:29.183Z",
    "Qnalikes": [],
    "Qnacomments": []
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
 * @apiParam {String} [paper_id]          [payload] 참고하는 qna 세션 id
 * @apiParam {Number} [secret]                [payload] null or 1 ( null = 공개, 1 = 익명)
 *
 *
 * @apiSuccessExample Success-Response:
HTTP/1.1 200 OK
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
HTTP/1.1 200 OK
{
    "count": 1
}
 */




// Qnacomment 관련 API
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
case : id Exist
HTTP/1.1 200 OK
참고 : http://apidoc.weliveon.net:1337/api/v1/qnacomment/SJS5ohbJL
*
case : id not Exist
HTTP/1.1 200 OK
참고 : http://apidoc.weliveon.net:1337/api/v1/qnacomment?qna_id=Hk5lG4Fam
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
HTTP/1.1 200 OK
{
    "id": "SJS5ohbJL",
    "writer": "양주메가스터디학원 이상미",
    "text": "2020년 건강과 꿈, 목표가 꼭 이루어지길...",
    "qna_id": "ByG7w2WkI",
    "createdAt": "2019-12-26T04:48:13.108Z",
    "updatedAt": "2019-12-26T04:48:13.108Z"
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
HTTP/1.1 200 OK
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
HTTP/1.1 200 OK
 {
    "count": 1
 }
 */


 // Qnalike 관련 API
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
case : id Exist
HTTP/1.1 200 OK
참고 : http://apidoc.weliveon.net:1337/api/v1/qnalike/SyzKF0yCSr
 *
case : id not Exist
HTTP/1.1 200 OK
참고 : http://apidoc.weliveon.net:1337/api/v1/qnalike?qna_id=rJvwRJ0HB
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
HTTP/1.1 200 OK
{
    "id": "SyzKF0yCSr",
    "writer": "배영찬",
    "qna_id": "rJvwRJ0HB",
    "createdAt": "2019-09-05T02:10:09.413Z",
    "updatedAt": "2019-09-05T02:10:09.413Z"
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
HTTP/1.1 200 OK
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
 HTTP/1.1 200 OK
{
    "count": 1
}
 */









// Shorten 관련 API
/**
 * @api {get} api/v1/shorten/{id} 1. GET : Shorten Select
 * @apiName ShortenSelect
 * @apiGroup Shorten
 * @apiUse ApiHeaderAuthorization
 *
 * @apiParam {String} id              [QueryParams] id(primary key)
 *
 *
 * @apiSuccessExample Success-Response:
HTTP/1.1 200 OK
참고 : http://apidoc.weliveon.net:1337/api/v1/shorten/2605
 */

/**
 * @api {post} api/v1/shorten 2. POST : Shorten Insert
 * @apiName ShortenInsert
 * @apiGroup Shorten
 * @apiUse ApiHeaderAuthorization
 *
 * @apiParam {String} long_url                [payload] long_url
 * @apiParam {String} short_url                [payload] short_url
 *
 *
 * @apiSuccessExample Success-Response:
HTTP/1.1 200 OK
{
    "id": 2585,
    "long_url": "http://weliveon.net/u/main/start/16abda6e-5e48-4327-b15d-bbbd3bae9b92",
    "short_url": "16abda6e-5e48-4327-b15d-bbbd3bae9b92",
    "updatedAt": "2019-11-01T09:44:58.788Z",
    "createdAt": "2019-11-01T09:44:58.788Z"
}
 */

/**
 * @api {put} api/v1/shorten/{id} 3. PUT : Shorten Update
 * @apiName ShortenUpdate
 * @apiGroup Shorten
 * @apiUse ApiHeaderAuthorization
 * @apiDescription payload의 값이 수정될 object
 *
 * @apiParam {String} id                      [QueryParams] 변경할 shorten id
 * @apiParam {String} [long_url]                [payload] long_url
 * @apiParam {String} [short_url]                [payload] short_url
 *
 *
 * @apiSuccessExample Success-Response:
HTTP/1.1 200 OK
{
    "count": 1
}
 */

/**
 * @api {delete} api/v1/shorten/{id} 4. DELETE : Shorten Delete
 * @apiName ShortenDelete
 * @apiGroup Shorten
 * @apiUse ApiHeaderAuthorization
 *
 * @apiParam {String} id                      [QueryParams] 삭제할 shorten id
 *
 *
 * @apiSuccessExample Success-Response:
HTTP/1.1 200 OK
{
    "count": 1
}
 */





// Requestdata 관련 API
/**
 * @api {get} api/v1/requestdata/{id?}?classroom_id=?&paper_id?=? 1. GET : Requestdata Select
 * @apiName RequestdataSelect
 * @apiGroup Requestdata
 * @apiUse ApiHeaderAuthorization
 *
 * @apiParam {String} [id]                [QueryParams] id(primary key) / id가 넘어올 경우 특정 Item 리턴, 그렇지 않으면 Requestdata list 리턴
 * @apiParam {String} classroom_id           [QueryString] classroom_id
 * @apiParam {String} [paper_id]           [QueryString] paper_id
 *
 *
 * @apiSuccessExample Success-Response:
case : id Exist
HTTP/1.1 200 OK
참고 : http://apidoc.weliveon.net:1337/api/v1/requestdata/1561
 *
case : id not Exist
HTTP/1.1 200 OK
참고 : http://apidoc.weliveon.net:1337/api/v1/requestdata?classroom_id=16771ba8-21f0-4560-a4d5-e9d887e535cd
 */

/**
 * @api {post} api/v1/requestdata 2. POST : Requestdata Insert
 * @apiName RequestdataInsert
 * @apiGroup Requestdata
 * @apiUse ApiHeaderAuthorization
 *
 * @apiParam {String} email                [payload] email
 * @apiParam {String} classroom_id                [payload] classroom_id
 * @apiParam {String} paper_id                [payload] paper_id
 * @apiParam {String} nick                [payload] nick
 * @apiParam {String} status                [payload] status
 *
 *
 *
 * @apiSuccessExample Success-Response:
HTTP/1.1 200 OK
{
    "id": 1562,
    "email": "sdfds@undefined",
    "classroom_id": "16771ba8-21f0-4560-a4d5-e9d887e535cd",
    "paper_id": "a4a81fd7-2ea6-4d11-a966-3bf7539060c0",
    "default_info": "Hello",
    "status": "Y",
    "createdAt": "2020-03-16T04:36:39.784Z",
    "updatedAt": "2020-03-16T04:36:39.784Z"
}
 */

/**
 * @api {put} api/v1/requestdata/{id} 3. PUT : Requestdata Update
 * @apiName RequestdataUpdate
 * @apiGroup Requestdata
 * @apiUse ApiHeaderAuthorization
 * @apiDescription payload의 값이 수정될 object
 *
 * @apiParam {String} id                [QueryParams] 변경할 requestdata id
 * @apiParam {String} [email]                [payload] email
 * @apiParam {String} [classroom_id]                [payload] classroom_id
 * @apiParam {String} [paper_id]                [payload] paper_id
 * @apiParam {String} [nick]                [payload] nick
 * @apiParam {String} [status]                [payload] status
 *
 *
 * @apiSuccessExample Success-Response:
HTTP/1.1 200 OK
{
    "count": 1
}
 */

/**
 * @api {delete} api/v1/requestdata/{id} 4. DELETE : Requestdata Delete
 * @apiName RequestdataDelete
 * @apiGroup Requestdata
 * @apiUse ApiHeaderAuthorization
 *
 * @apiParam {String} id                      [QueryParams] 삭제할 requestdata id
 *
 *
 * @apiSuccessExample Success-Response:
HTTP/1.1 200 OK
{
    "count": 1
}
 */