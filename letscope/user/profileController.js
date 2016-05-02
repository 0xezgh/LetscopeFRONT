(function(){
    'use strict';

    angular
        .module('letscope')
        .controller('ProfileController',ProfileController);

    ProfileController.$inject = ['UserService','Upload','$scope','$location','$rootScope','notificationSocket'];

    function ProfileController(UserService,Upload,$scope,$location,$rootScope){
        var id;

        if($location.path()=='/profile' || $location.path()=='/profile/edit')
        {
            id = $rootScope.AuthenticatedUser.id;
        }else
        {
            id = $location.path().split('/')[2];
        }

        $scope.msg = "";

        $scope.notifications = [];

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
                $scope.profile.following = response.following;
                }
            else{
                $scope.msg = "Error while loading profile";
            }
        });

        $scope.update = function(profile){
            UserService.UpdateProfile(id,profile.fname,profile.lname,profile.birthdate,profile.occupation,profile.website,profile.country,profile.city,profile.aboutme,profile.myskills,profile.facebook,profile.twitter,profile.google,profile.pinterest,profile.instagram,profile.linkedin,function(response){
                if (response.success)
                {
                    $scope.msg = "Successfully modified !";
                }
                else{
                    $scope.msg = "Changes has not been applied !";
                }
            });
        };

        $scope.uploadFile = function(file){
            Upload.upload({
                url: 'http://localhost:3000/user/upload/'+id, //webAPI exposed to upload the file
                data:{file:file} //pass file as data, should be user ng-model
            }).then(function (resp) { //upload function returns a promise
                if(resp.data.info){ //validate success
                    console.log(resp.data.info);
                } else {
                    console.log(resp.data.error);
                }
            }, function (resp) { //catch error
                console.log('Error status: ' + resp.err);
            }, function (evt) {
                console.log(evt);
                var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
                console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
                //$scope.progress = 'progress: ' + progressPercentage + '% '; // capture upload progress
            }).finally(function(){
                $location.path('/profile');
            });
        };

        $scope.follow = function () {
            var followed = $location.path().split('/')[2];
            UserService.FollowUser(id, followed, function (response) {
                if (response.success) {
                    $scope.msg = "User followed !";
                    console.log($scope.notifications);
                }
                else {
                    $scope.msg = "Problem has occurred! ";
                }
            });
        }

        $scope.$on('socket:notification', function(event, data) {
            console.log('got a message'+ event.name);
            if (!data.payload) {
                $log.error('invalid message', 'event', event,
                    'data', JSON.stringify(data));
                return;
            }
            $scope.$apply(function() {
                $scope.notifications = push(messageFormatter(new Date(), data.source,data.payload));
            });
        });

    }
})();


