const projects = [
	{
		name: 'four-card-feature-section-master'
		
        },
	{
		name: 'base-apparel-coming-soon-master'
		
        },
	{
		name: 'intro-component-with-signup-form-master'
		
    
    },
	{
		name: 'single-price-grid-component-master'
		
        },
	{
		name: 'ping-coming-soon-page-master'
		
        },
	{
		name: 'huddle-landing-page-with-alternating-feature-blocks-master'
		
        },
	{
		name: 'huddle-landing-page-with-single-introductory-section-master'
		
        },
	{
		name: 'fylo-landing-page-with-two-column-layout-master'
		
        },
	{
		name: 'insure-landing-page-master'
		
    },
	{
		name: 'pricing-component-with-toggle-master'
	},
	{
		name: 'project-tracking-intro-component-master'
	},
	{
		name: 'clipboard-landing-page-master'
		
	}
];
const list = document.getElementById('list');

projects.forEach(({ name, youtube }, i) => {
	const listItem = document.createElement('li');

	listItem.innerHTML = `
		<a href="/${name}/index.html">
			<img src="/${name}/design/desktop-design.jpg" alt="${name}" />
			<p>${i + 1}. ${formatProjectName(name)}</p>
		</a>
		<div class="links-container">
			<a href="/${name}/index.html" class="blue">
				<i class="fas fa-eye"></i>
			</a>
			<a href="${youtube}" class="youtube">
				<i class="fab fa-youtube"></i>
			</a>
		</div>
	`;

	list.appendChild(listItem);
});

function formatProjectName(name) {
	return name
		.split('-')
		.map(word => word[0].toUpperCase() + word.slice(1))
		.join(' ');
}