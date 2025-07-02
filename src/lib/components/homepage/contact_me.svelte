<script lang="ts">
	let status = '';
	const handleSubmit = async (data: any) => {
		status = 'Submitting...';
		const formData = new FormData(data.currentTarget);
		const object = Object.fromEntries(formData);
		const json = JSON.stringify(object);

		const response = await fetch('https://api.web3forms.com/submit', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json'
			},
			body: json
		});
		const result = await response.json();
		if (result.success) {
			console.log(result);
			status = result.message || 'Success';
		}
	};
</script>

<section class="home-page-section flex flex-col">
	<div class="mb-12 flex w-full flex-col text-center">
		<h2 class="title-size">Contact Me</h2>
		<p class="mx-auto text-base leading-relaxed lg:w-2/3">
			Feel free to reach out to me! Whether you have a question, feedback, or a collaboration
			proposal, I'd love to hear from you.
		</p>
	</div>
	<div class="mx-auto md:w-2/3 lg:w-1/2 flex flex-col justify-center items-center">
		<form on:submit|preventDefault={handleSubmit}>
			<input type="hidden" name="access_key" value="ed8ca235-8cb7-40bc-9dd1-1d2eb8b5f234" />
			<div class="flex flex-row">
				<div>
					<input type="text" name="name" placeholder="Name" class="contact-input" required />
				</div>
				<div>
					<input type="email" name="email" placeholder="Email" class="contact-input" required />
				</div>
			</div>
			<div class="flex">
				<textarea name="message" required rows="3" placeholder="Message" class="contact-message"
				></textarea>
			</div>
      <div class="flex">

			<input type="submit" class="m-2 button-rounded gradient-horizontal hover:opacity-90 transition-opacity" value="Submit"/>
      </div>
		</form>
	</div>

	<div>{status}</div>
</section>

<style lang="postcss">
	@reference "tailwindcss";

	.contact-input {
		@apply rounded border border-gray-700 bg-gray-800 py-1 px-3 m-2 leading-8 text-gray-100 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900;
	}

	.contact-message {
		@apply h-32 w-full m-2 resize-none rounded border border-gray-700 bg-gray-800 py-1 px-3 text-base leading-6 text-gray-100 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900;
	}
</style>
