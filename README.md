                                 # SOLAR POWER

This repo contains the "Solar Power" Full Stack Project for the Microsoft Future Ready Talent Internship.

Live At: https://solarfrt.azurewebsites.net/

Azure Function Repo : https://github.com/Aakarsh-Lohani/FRT_SOLAR_POWER_EMAIL
## Problem Statement 

There is a need to promote green energy, especially solar energy. However, many potential users lack adequate knowledge about the benefits of solar energy, the process of purchasing solar panels, and the services offered. 

This project aims to bridge this information gap using Azure services and Azure AI services (Solar Bot).

## Project Description

"SOLAR POWER" is a web-based platform dedicated to promoting green energy, with a focus on solar energy. This project provides detailed insights about the importance of green energy and the benefits of solar panels. An AI Bot is integrated for better response.

## Key Features

- **Educational Content**: The website provides comprehensive information about the importance of green energy and solar energy, helping users understand the environmental and economic benefits of switching to solar power.

- **Azure AI Bot Integration**: An Azure bot is integrated to provide information about solar panels, solar energy, and the services offered. The bot can answer user queries in real-time, enhancing user engagement and satisfaction.

- **Azure App Service**: The website is hosted using Azure App Service, ensuring high availability and scalability to handle varying traffic loads.

- **Azure Functions for Email**: Azure Functions are used to send an email when a user clicks on 'Contact Sales'. This allows for prompt communication with potential customers, improving the chances of sales conversion.

## Technologies Used

This project is built with 
 - HTML, CSS, JavaScript ( Front End )
 - Node.js, Express.js and SMTP ( Back End )
 - Microsoft Azure Cloud Services
 - Azure AI Language Studio ( Knowledge Base for Solar Bot ) 

Microsoft Azure Services used are:
 - Azure App Service: For hosting the website.
 - Azure Functions: To send email using Simple Mail Transfer Protocol (SMTP) (Gmail). An email is sent to the user when 'Contact Sales' is clicked after filling up the box with the user's Email. Also, the submitted email address is sent to the host.
 - Azure AI Bot Service: A SolarBot is created using Bot Service and Azure AI Language Studio to answer questions related to the project and Solar Energy.

Other Services:
 - Azure AI Language Studio: To train the Bot with data related to Solar Energy, Solar Power, and the project itself.
 - IDE: Visual Studio Code: For the deployment of Azure Function, building the Front End of the Website, and Source Control using GitHub. Used Azure Extensions for handling Azure Services.
 - GitHub: For source control, creating a repository, and "Continuous Deployment (CD)" of the website using Azure App Service.
 - AI GitHub Copilot (GitHub Student Developer Pack) : Handling errors and optimization .

## Conclusion

In summary, this project leverages Azure services to create an informative and interactive platform for promoting solar energy, thereby addressing a clear need in the market for accessible and user-friendly resources about green energy solutions.
