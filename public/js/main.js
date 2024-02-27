$(document).ready(() => {
	$("a").on("click", function (r) {
		r.preventDefault(), window.location.replace(window.location.href);
	});

	var currentTime = new Date().getHours();
	var msgGreeting;

	if (currentTime >= 0 && currentTime < 12) {
		msgGreeting = 'Good morning'; 

	} else if (currentTime >= 12 && currentTime < 17) {
		msgGreeting = 'Good afternoon';

	} else if (currentTime >= 17 && currentTime < 24) {
		msgGreeting = 'Good evening';
	}

	$('#msgGreeting').html(msgGreeting);

	$(".cb-input").on("focus", function () {
		$(this).parent().addClass("cb-input-hasFocus");
		$(this).parent().addClass("cb-input-transition");
		$(this).prev().addClass("cb-inputLabel-transition");
		$(this).parent().next().addClass("cb-border-hasFocus");
	});

	$(".cb-input").on("blur", function () {
		$(this).parent().removeClass("cb-input-hasFocus");
		$(this).parent().removeClass("cb-input-transition");
		$(this).prev().removeClass("cb-inputLabel-transition");
		$(this).parent().next().removeClass("cb-border-hasFocus");

		if ($(this).val().trim() !== "") {
			$(this).parent().addClass("cb-input-hasFocus");
			$(this).parent().addClass("cb-input-transition");
			$(this).prev().addClass("cb-inputLabel-transition");
		}

		if ($(this).val().trim().length < 3) {
			$(this).parent().parent().next(".cb-input-message").show();
			$(this).prev().children(".cb-input-errIcon").show();
			$(this).prev().children(".cb-input-labelText").addClass("cb-invalid");
			$(this).parent().next().addClass("cb-border-invalid");
		} else {
			$(this).parent().parent().next(".cb-input-message").hide();
			$(this).prev().children(".cb-input-errIcon").hide();
			$(this).prev().children(".cb-input-labelText").removeClass("cb-invalid");
			$(this).parent().next().removeClass("cb-border-invalid");
		}
	});

	$(".cb-input").on("keyup", function () {
		var empty = false;

		$(".cb-input").each(function () {
			if ($(this).val().trim().length < 3) {
				empty = true;
			}
		});

		if (empty) {
			$(".submit-btn").attr("disabled", true);
			$(".submit-btn").addClass("cb-button-disabled");
		} else {
			$(".submit-btn").attr("disabled", false);
			$(".submit-btn").removeClass("cb-button-disabled");
		}
	});

	$(".cb-toggleMask-btn").on("click", function () {
		if ($(this).hasClass("eye-icon")) {
			$(this).removeClass("eye-icon");
			$(this).addClass("eye-off-icon");
			$(this).html(
				'<svg width="24px" height="24px" viewBox="0 0 24 24" role="img" focusable="false"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g opacity="0.01"><rect fill="#FFBFF9" x="0" y="0" width="24" height="24"></rect><rect fill="#FFFFFF" x="1" y="1" width="22" height="22"></rect><g stroke-width="1" transform="translate(0.000000, 1.000000)" stroke="#FF2AEC"><rect stroke-width="0.25" x="6.625" y="0.125" width="10.75" height="21.75" rx="2"></rect><path d="M8.5,0.125 C7.46446609,0.125 6.625,0.964466094 6.625,2 L6.625,20 C6.625,21.0355339 7.46446609,21.875 8.5,21.875 L15.5,21.875 C16.5355339,21.875 17.375,21.0355339 17.375,20 L17.375,2 C17.375,0.964466094 16.5355339,0.125 15.5,0.125 L8.5,0.125 Z" stroke-width="0.25" transform="translate(12.000000, 11.000000) rotate(-270.000000) translate(-12.000000, -11.000000) "></path><path d="M1,11 L23,11" stroke-width="0.3" stroke-linecap="square" stroke-dasharray="1" transform="translate(12.000000, 11.000000) rotate(-90.000000) translate(-12.000000, -11.000000) "></path><path d="M0.978218914,11 L22.9782189,11" stroke-width="0.3" stroke-linecap="square" stroke-dasharray="1" transform="translate(11.978219, 11.000000) rotate(-180.000000) translate(-11.978219, -11.000000) "></path><path d="M-2.8492424,11 L26.8492424,11" stroke-width="0.3" stroke-linecap="square" stroke-dasharray="1" transform="translate(12.000000, 11.000000) rotate(-135.000000) translate(-12.000000, -11.000000) "></path><path d="M-2.8492424,11 L26.8492424,11" stroke-width="0.3" stroke-linecap="square" stroke-dasharray="1" transform="translate(12.000000, 11.000000) rotate(-45.000000) translate(-12.000000, -11.000000) "></path><circle stroke-width="0.5" cx="12" cy="11" r="8.75"></circle><circle stroke-width="0.5" cx="12" cy="11" r="5.25"></circle><rect stroke-width="0.5" x="3.25" y="2.25" width="17.5" height="17.5" rx="2"></rect></g></g><path d="M12.13525,18.512 C16.71175,18.512 20.7655,16.27775 23.26975,12.842 C20.7655,9.407 16.71175,7.17275 12.13525,7.17275 C7.558,7.17275 3.50425,9.407 1,12.842 C3.50425,16.27775 7.558,18.512 12.13525,18.512 Z M8.51125,7.66475 C7.6285,8.573 7.08475,9.812 7.08475,11.1785 C7.08475,13.96325 9.34225,16.22075 12.12775,16.22075 C14.9125,16.22075 17.17,13.96325 17.17,11.1785 C17.17,9.812 16.62625,8.573 15.7435,7.66475 M3.88675,19.628 L18.34,5 L3.88675,19.628 Z" stroke="#3B3331" stroke-linecap="round" stroke-linejoin="round"></path></g></svg>'
			);
			$(this).parent().prev().attr("type", "text");
		} else {
			$(this).removeClass("eye-off-icon");
			$(this).addClass("eye-icon");
			$(this).html(
				'<svg width="24px" height="24px" viewBox="0 0 24 24" role="img" focusable="false"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g opacity="0.01"><rect fill="#FFBFF9" x="0" y="0" width="24" height="24"></rect><rect fill="#FFFFFF" x="1" y="1" width="22" height="22"></rect><g stroke-width="1" transform="translate(0.000000, 1.000000)" stroke="#FF2AEC"><rect stroke-width="0.25" x="6.625" y="0.125" width="10.75" height="21.75" rx="2"></rect><path d="M8.5,0.125 C7.46446609,0.125 6.625,0.964466094 6.625,2 L6.625,20 C6.625,21.0355339 7.46446609,21.875 8.5,21.875 L15.5,21.875 C16.5355339,21.875 17.375,21.0355339 17.375,20 L17.375,2 C17.375,0.964466094 16.5355339,0.125 15.5,0.125 L8.5,0.125 Z" stroke-width="0.25" transform="translate(12.000000, 11.000000) rotate(-270.000000) translate(-12.000000, -11.000000) "></path><path d="M1,11 L23,11" stroke-width="0.3" stroke-linecap="square" stroke-dasharray="1" transform="translate(12.000000, 11.000000) rotate(-90.000000) translate(-12.000000, -11.000000) "></path><path d="M0.978218914,11 L22.9782189,11" stroke-width="0.3" stroke-linecap="square" stroke-dasharray="1" transform="translate(11.978219, 11.000000) rotate(-180.000000) translate(-11.978219, -11.000000) "></path><path d="M-2.8492424,11 L26.8492424,11" stroke-width="0.3" stroke-linecap="square" stroke-dasharray="1" transform="translate(12.000000, 11.000000) rotate(-135.000000) translate(-12.000000, -11.000000) "></path><path d="M-2.8492424,11 L26.8492424,11" stroke-width="0.3" stroke-linecap="square" stroke-dasharray="1" transform="translate(12.000000, 11.000000) rotate(-45.000000) translate(-12.000000, -11.000000) "></path><circle stroke-width="0.5" cx="12" cy="11" r="8.75"></circle><circle stroke-width="0.5" cx="12" cy="11" r="5.25"></circle><rect stroke-width="0.5" x="3.25" y="2.25" width="17.5" height="17.5" rx="2"></rect></g></g><path d="M12.13525,18.33925 C16.71175,18.33925 20.7655,16.105 23.26975,12.67 C20.7655,9.23425 16.71175,7 12.13525,7 C7.558,7 3.50425,9.23425 1,12.67 C3.50425,16.105 7.558,18.33925 12.13525,18.33925 Z M8.51125,7.49275 C7.6285,8.40025 7.08475,9.64 7.08475,11.00575 C7.08475,13.7905 9.34225,16.04875 12.12775,16.04875 C14.9125,16.04875 17.17,13.7905 17.17,11.00575 C17.17,9.63925 16.62625,8.40025 15.7435,7.49275" id="mask-OFGSUWNG" stroke="#3B3331" stroke-linecap="round" stroke-linejoin="round"></path></g></svg>'
			);
			$(this).parent().prev().attr("type", "password");
		}
	});

	$(".cb-toggleCheckbox").on("click", function () {
		if ($(this).hasClass("checked")) {
			$(this).removeClass("checked");
			$(this).addClass("not-checked");
			$(this).html(
				'<svg width="24px" height="24px" viewBox="0 0 24 24" role="img" class="cb-checkbox-icon" focusable="false"><g><rect data-container="" stroke-width="1" x="1" y="1" width="22" height="22" rx="2"></rect></g><g data-indeterminate="" stroke="none" stroke-width="2" fill="none" fill-rule="evenodd"><path data-mark="" transform="translate(3.5, 4)" d="M13.5799 7C14.1322 7 14.5799 7.44772 14.5799 8C14.5799 8.51284 14.1939 8.93551 13.6965 8.99327L13.5799 9H2.41992C1.86764 9 1.41992 8.55228 1.41992 8C1.41992 7.48716 1.80596 7.06449 2.3033 7.00673L2.41992 7H13.5799Z"></path></g><g data-checked="" stroke="none" stroke-width="0.1" fill="none" fill-rule="evenodd"><path transform="translate(3.5, 4)" data-mark="" d="M13.3413 3.33984C13.6657 2.94639 14.2534 2.88571 14.654 3.2043C15.0238 3.49838 15.1049 4.01283 14.86 4.39969L14.792 4.49354L7.23449 13.6602C6.93616 14.022 6.41481 14.1026 6.02112 13.8648L5.92556 13.7987L1.34978 10.198C0.947509 9.88145 0.882681 9.30456 1.20498 8.90947C1.5025 8.54477 2.02587 8.46247 2.42103 8.70093L2.51695 8.76726L6.36761 11.7972L13.3413 3.33984Z" fill="#FFFFFF" fill-rule="nonzero"></path></g></svg>'
			);
		} else {
			$(this).removeClass("not-checked");
			$(this).addClass("checked");
			$(this).html(
				'<svg width="24px" height="24px" viewBox="0 0 24 24" aria-hidden="true" role="img" stroke="#3b3331" fill="#3b3331" class="CheckboxIcon__checkbox___35aJi CheckboxIcon__checked___1s4OU" focusable="false"><g><rect data-container="" stroke-width="1" x="1" y="1" width="22" height="22" rx="2"></rect></g><g data-indeterminate="" stroke="none" stroke-width="2" fill="none" fill-rule="evenodd"><path data-mark="" transform="translate(3.5, 4)" d="M13.5799 7C14.1322 7 14.5799 7.44772 14.5799 8C14.5799 8.51284 14.1939 8.93551 13.6965 8.99327L13.5799 9H2.41992C1.86764 9 1.41992 8.55228 1.41992 8C1.41992 7.48716 1.80596 7.06449 2.3033 7.00673L2.41992 7H13.5799Z"></path></g><g data-checked="" stroke="none" stroke-width="0.1" fill="none" fill-rule="evenodd"><path transform="translate(3.5, 4)" data-mark="" d="M13.3413 3.33984C13.6657 2.94639 14.2534 2.88571 14.654 3.2043C15.0238 3.49838 15.1049 4.01283 14.86 4.39969L14.792 4.49354L7.23449 13.6602C6.93616 14.022 6.41481 14.1026 6.02112 13.8648L5.92556 13.7987L1.34978 10.198C0.947509 9.88145 0.882681 9.30456 1.20498 8.90947C1.5025 8.54477 2.02587 8.46247 2.42103 8.70093L2.51695 8.76726L6.36761 11.7972L13.3413 3.33984Z" fill="#FFFFFF" fill-rule="nonzero"></path></g></svg>'
			);
		}
	});
});
