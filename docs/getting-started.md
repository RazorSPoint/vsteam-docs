---
id: getting-started
title: Getting Started
sidebar_label: Getting Started
---

## Introduction

VSTeam is a PowerShell module with commands for accessing your [Azure DevOps Server (previously named Visual Studio Team Foundation Server) 2017/2018](https://cda.ms/Bf) and [Azure DevOps (previously named Visual Studio Team Services)](https://cda.ms/Bf).

The VSTeam module is also a provider allowing users to navigate their [Azure DevOps Server](https://cda.ms/Bf) and [Azure DevOps](https://cda.ms/Bf) as a file system.

To get started you can visit this blog [PowerShell I would like you to meet TFS and VSTS](http://www.donovanbrown.com/post/PowerShell-I-would-like-you-to-meet-TFS-and-VSTS)

Documentation of the cmdlets can be found in the [docs README](https://github.com/DarqueWarrior/vsteam/blob/master/docs/readme.md) or using `Get-Help VSTeam` once the module is installed.

## Requirements

- Windows PowerShell 5.0 or newer.
- PowerShell Core.

## Installation

Install this module from the [PowerShell Gallery](https://www.powershellgallery.com/packages/VSTeam)

```powershell
Install-Module -Name VSTeam -Scope CurrentUser
```

## Module Dependencies

- [SHiPS module](https://www.powershellgallery.com/packages/SHiPS/)
- [Trackyon.Utils module](https://www.powershellgallery.com/packages/Trackyon.Utils)