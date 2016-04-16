(function(){
    'use strict';

    angular
        .module('letscope')
        .controller('ProfileController',ProfileController);

    ProfileController.$inject = ['UserService','Upload','$scope','$location','AuthenticatedUser','$rootScope'];

    function ProfileController(UserService,Upload,$scope,$location,AuthenticatedUser,$rootScope){
        var id = '570f7ea735c8d4c818471a57';

        /*if($location.path()=='/profile')
        {
            id = AuthenticatedUser.id;
        }else
        {
            id =    splice ...
        }    */

        $scope.msg = "";

        $scope.countries = [
            'Afghanistan',
            'Åland Islands',
            'Albania',
            'Algeria',
            'American Samoa' ,
            'AndorrA',
            'Angola',
            'Anguilla',
            'Antarctica',
            'Antigua and Barbuda',
            'Argentina',
            'Armenia',
            'Aruba',
            'Australia',
            'Austria',
            'Azerbaijan',
            'Bahamas',
            'Bahrain',
            'Bangladesh',
            'Barbados',
            'Belarus',
            'Belgium',
            'Belize',
            'Benin',
            'Bermuda',
            'Bhutan',
            'Bolivia',
            'Bosnia and Herzegovina',
            'Botswana',
            'Bouvet Island',
            'Brazil',
            'British Indian Ocean Territory',
            'Brunei Darussalam',
            'Bulgaria',
            'Burkina Faso',
            'Burundi',
            'Cambodia',
            'Cameroon',
            'Canada',
            'Cape Verde',
            'Cayman Islands',
            'Central African Republic',
            'Chad',
            'Chile',
            'China',
            'Christmas Island',
            'Cocos (Keeling) Islands',
            'Colombia',
            'Comoros',
            'Congo',
            'Congo, The Democratic Republic of the',
            'Cook Islands',
            'Costa Rica',
            'Cote D\'Ivoire',
            'Croatia',
            'Cuba',
            'Cyprus',
            'Czech Republic',
            'Denmark',
            'Djibouti',
            'Dominica',
            'Dominican Republic',
            'Ecuador',
            'Egypt',
            'El Salvador',
            'Equatorial Guinea',
            'Eritrea',
            'Estonia',
            'Ethiopia',
            'Falkland Islands (Malvinas)',
            'Faroe Islands',
            'Fiji',
            'Finland',
            'France',
            'French Guiana',
            'French Polynesia',
            'French Southern Territories',
            'Gabon',
            'Gambia',
            'Georgia',
            'Germany',
            'Ghana',
            'Gibraltar',
            'Greece',
            'Greenland',
            'Grenada',
            'Guadeloupe',
            'Guam',
            'Guatemala',
            'Guernsey',
            'Guinea',
            'Guinea-BissaGW',
            'Guyana',
            'Haiti',
            'Heard Island and Mcdonald Islands',
            'Holy See (Vatican City State)',
            'Honduras',
            'Hong Kong',
            'Hungary',
            'Iceland',
            'India',
            'Indonesia',
            'Iran, Islamic Republic Of',
            'Iraq',
            'Ireland',
            'Isle of Man',
            'Israel',
            'Italy',
            'Jamaica',
            'Japan',
            'Jersey',
            'Jordan',
            'Kazakhstan',
            'Kenya',
            'Kiribati',
            'Korea, Democratic People\'S Republic of',
            'Korea, Republic of',
            'Kuwait',
            'Kyrgyzstan',
            'Lao People\'S Democratic Republic',
            'Latvia',
            'Lebanon',
            'Lesotho',
            'Liberia',
            'Libyan Arab Jamahiriya',
            'Liechtenstein',
            'Lithuania',
            'Luxembourg',
            'Macao',
            'Macedonia, The Former Yugoslav Republic of',
            'Madagascar',
            'Malawi',
            'Malaysia',
            'Maldives',
            'Mali',
            'Malta',
            'Marshall Islands',
            'Martinique',
            'Mauritania',
            'Mauritius',
            'Mayotte',
            'Mexico',
            'Micronesia, Federated States of',
            'Moldova, Republic of',
            'Monaco',
            'Mongolia',
            'Montserrat',
            'Morocco',
            'Mozambique',
            'Myanmar',
            'Namibia',
            'Nauru',
            'Nepal',
            'Netherlands',
            'Netherlands Antilles',
            'New Caledonia',
            'New Zealand',
            'Nicaragua',
            'Niger',
            'Nigeria',
            'Niue',
            'Norfolk Island',
            'Northern Mariana Islands',
            'Norway',
            'Oman',
            'Pakistan',
            'Palau',
            'Palestinian Territory, Occupied',
            'Panama',
            'Papua New Guinea',
            'Paraguay',
            'Peru',
            'Philippines',
            'Pitcairn',
            'Poland',
            'Portugal',
            'Puerto Rico',
            'Qatar',
            'Reunion',
            'Romania',
            'Russian Federation',
            'RWANDA',
            'Saint Helena',
            'Saint Kitts and Nevis',
            'Saint Lucia',
            'Saint Pierre and Miquelon',
            'Saint Vincent and the Grenadines',
            'Samoa',
            'San Marino',
            'Sao Tome and Principe',
            'Saudi Arabia',
            'Senegal',
            'Serbia and Montenegro',
            'Seychelles',
            'Sierra Leone',
            'Singapore',
            'Slovakia',
            'Slovenia',
            'Solomon Islands',
            'Somalia',
            'South Africa',
            'South Georgia and the South Sandwich Islands',
            'Spain',
            'Sri Lanka',
            'Sudan',
            'Suriname',
            'Svalbard and Jan Mayen',
            'Swaziland',
            'Sweden',
            'Switzerland',
            'Syrian Arab Republic',
            'Taiwan, Province of China',
            'Tajikistan',
            'Tanzania, United Republic of',
            'Thailand',
            'Timor-Leste',
            'Togo',
            'Tokelau',
            'Tonga',
            'Trinidad and Tobago',
            'Tunisia',
            'Turkey',
            'Turkmenistan',
            'Turks and Caicos Islands',
            'Tuvalu',
            'Uganda',
            'Ukraine',
            'United Arab Emirates',
            'United Kingdom',
            'United States',
            'United States Minor Outlying Islands',
            'Uruguay',
            'Uzbekistan',
            'Vanuatu',
            'Venezuela',
            'Viet Nam',
            'Virgin Islands, British',
            'Virgin Islands, U.S.',
            'Wallis and Futuna',
            'Western Sahara',
            'Yemen',
            'Zambia',
            'Zimbabwe'
        ];

        $scope.credentials = {
            email : "",
            password : ""
        }

        $scope.profile = {
            image : "",
            fname : "",
            lname : "",
            occupation : "",
            city : "",
            country : "",
            aboutme :"",
            myskills : "",
            facebook :"",
            twitter : "",
            google : "",
            pinterest : "",
            instagram : "",
            linkedin : "",
            website : ""
        };

        UserService.GetProfile(id, function (response) {
            if(response.success){
                console.log(response);
                $scope.profile.image = response.image;
                $scope.profile.fname = response.fname;
                $scope.profile.lname = response.lname;
                $scope.profile.occupation = response.occupation;
                $scope.profile.city = response.city;
                $scope.profile.country = response.country;
                $scope.profile.aboutme = response.aboutme;
                $scope.profile.myskills = response.myskills;
                $scope.profile.facebook = response.facebook;
                $scope.profile.twitter = response.twitter;
                $scope.profile.google = response.google;
                $scope.profile.pinterest = response.pinterest;
                $scope.profile.instagram = response.instagram;
                $scope.profile.linkedin = response.linkedin;
                $scope.profile.website = response.website;
                $scope.profile.followers = response.followers;
                }
            else{
                $scope.msg = "Error while loading profile";
            }
        });

        $scope.uploadFile = function(){

                console.log($scope.file);

                Upload.upload({
                        url: "http://127.0.0.1:3000/user/upload/zefze", //node.js route
                        file: $scope.file
                    })
                    .success(function(data) {
                        console.log(data, 'uploaded');
                    });


        };

        /*$scope.update = function(profile){
            console.log(profile);
            UserService.UpdateProfile(id,profile.fname,profile.lname,profile.occupation,profile.website,profile.country,profile.city,profile.aboutme,profile.myskills,profile.facebook,profile.twitter,profile.google,profile.pinterest,profile.instagram,profile.linkedin,function(response){
                if (response.success)
                {
                    $scope.msg = "Successfully modified !";
                }
                else{
                    $scope.msg = "Changes has not been applied !";
                }
            });
        };
        $scope.submit = function() {
            if ( $scope.file) {
                console.log('fv');
                $scope.upload($scope.file);
            }
        };
        $scope.upload = function (file) {
            Upload.upload({
                url: 'http://localhost:3000/user/upload/'+id,
                data: {file: file, 'id': id}
            }).then(function (resp) {
                console.log('Success ' + resp.config.data.file.name + 'uploaded. Response: ' + resp.data);
            }, function (resp) {
                console.log('Error status: ' + resp.status);
            }, function (evt) {
                var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
                console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
            });
        };*/
    /*    $scope.onFileSelect = function(image) {
            $scope.uploadInProgress = true;
            $scope.uploadProgress = 0;
            console.log(image);
            if (angular.isArray(image)) {
                image = image[0];
            }

            $scope.upload = Upload.upload({
                url: 'http://localhost:3000/user/upload',
                method: 'POST',
                data: {
                    type: 'profile'
                },
                file: image
            }).progress(function(event) {
                console.log("start uploading");
                /*$scope.uploadProgress = Math.floor(event.loaded / event.total);
                $scope.$apply();
            }).success(function(data, status, headers, config) {
               // AlertService.success('Photo uploaded!');
                console.log('Photo uploaded !');
            }).error(function(err) {
                $scope.uploadInProgress = false;
                //AlertService.error('Error uploading file: ' + err.message || err);
                console.log('Error uploading file: ' + err.message || err);
            });
        };
*/
        $scope.follow = function () {
            var followed = $location.path().split('/')[2];
            UserService.FollowUser(id, followed, function (response) {
                if (response.success) {
                    console.log("User followed !");
                }
                else {
                    console.log("Probème has occured! ");
                }
            });
        }
    }
})();


