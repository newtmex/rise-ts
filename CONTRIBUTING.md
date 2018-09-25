# Contributing to RISE

🎉 Thanks for taking the time to contribute 🎉

The following is a set of guidelines for contributing to RISE. Of course always use your best judgment, and feel free to propose changes to this document in a pull request.

## Table of Contents


Table of Contents
=================

* [Code of Conduct](#code-of-conduct)
* [I just need help!](#i-just-need-help)
* [Reporting Bugs](#reporting-bugs)
    * [How Do I Submit A (Good) Bug Report?](#how-do-i-submit-a-good-bug-report)
* [Suggesting Enhancements](#suggesting-enhancements)
    * [How Do I Submit A (Good) Enhancement Suggestion?](#how-do-i-submit-a-good-enhancement-suggestion)
* [Local Development](#local-development)
    * [Install](#install)
    * [Build](#build)
    * [Test](#test)
* [Pull Requests](#pull-requests)
* [Styleguides](#styleguides)


## Code of Conduct

This project and everyone participating in it is governed by the [Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code.

## I just need help!

If you have an issue that you feel does not require any code changes, always feel free to reach out to us on [Slack][slack]

## Reporting Bugs

This section guides you through submitting a bug report for RISE. Following these guidelines helps maintainers and the community understand your report :pencil:, reproduce the behavior :computer: :computer:, and find related reports :mag_right:.

When you are creating a bug report, please [include as many details as possible](#how-do-i-submit-a-good-bug-report). Fill out [the required template](ISSUE_TEMPLATE.md), the information it asks for helps us resolve issues faster.

> **Note:** If you find a **Closed** issue that seems like it is the same thing that you're experiencing, open a new issue and include a link to the original issue in the body of your new one.

### How Do I Submit A (Good) Bug Report?

Bugs are tracked as [GitHub issues](https://guides.github.com/features/issues/). After you've determined which repository your bug is related to, create an issue on that repository and provide the following information by filling in [the template](ISSUE_TEMPLATE.md).

Explain the problem and include additional details to help maintainers reproduce the problem:

* **Use a clear and descriptive title** for the issue to identify the problem.
* **Describe the exact steps which reproduce the problem** in as many details as possible. For example, start by explaining how you configured `risejs` and which method and parameters exactly you used. When listing steps, **don't just say what you did, but explain how you did it**.
* **Provide specific examples to demonstrate the steps**. Include links to files or GitHub projects, or copy/pasteable snippets, which you use in those examples. If you're providing snippets in the issue, use [Markdown code blocks](https://help.github.com/articles/markdown-basics/#multiple-lines).
* **Describe the behavior you observed after following the steps** and point out what exactly is the problem with that behavior.
* **Explain which behavior you expected to see instead and why.**

Provide more context by answering these questions:

* **Did the problem start happening recently** (e.g. after updating to a new version) or was this always a problem?
* If the problem started happening recently, **can you reproduce the problem in an older version?** What's the most recent version in which the problem doesn't happen?
* **Can you reliably reproduce the issue?** If not, provide details about how often the problem happens and under which conditions it normally happens.

Include details about your configuration and environment:

* **Which version of `rise-js` are you using?**
* **What's the name and version of the Browser you're using / What version of Node.js are you using?**
* **What's the address of the node that you're interacting with?**

## Suggesting Enhancements

This section guides you through submitting an enhancement suggestion for RISE, including completely new features and minor improvements to existing functionality. Following these guidelines helps maintainers and the community understand your suggestion :pencil: and find related suggestions :mag_right:.

When you are creating an enhancement suggestion, please [include as many details as possible](#how-do-i-submit-a-good-enhancement-suggestion). Fill in [the template](ISSUE_TEMPLATE.md), including the steps that you imagine you would take if the feature you're requesting existed.

#### How Do I Submit A (Good) Enhancement Suggestion?

Enhancement suggestions are tracked as [GitHub issues](https://guides.github.com/features/issues/). After you've determined which repository your enhancement suggestion is related to, create an issue on that repository and provide the following information:

* **Use a clear and descriptive title** for the issue to identify the suggestion.
* **Provide a step-by-step description of the suggested enhancement** in as many details as possible.
* **Provide specific examples to demonstrate the steps**. Include copy/pasteable snippets which you use in those examples, as [Markdown code blocks](https://help.github.com/articles/markdown-basics/#multiple-lines).
* **Describe the current behavior** and **explain which behavior you expected to see instead** and why.
* **Explain why this enhancement would be useful** to most RISE users and isn't something that can or should be implemented otherwise.

## Local Development

### Install

1. clone repository
2. `cd rise-ts`
3. `npm install`

### Build

`npm run package`

### Test

`npm run test-all`

## Pull Requests

The process described here has several goals:

- Maintain RISE's quality
- Fix problems that are important to users
- Engage the community in working toward the best possible RISE
- Enable a sustainable system for RISE's maintainers to review contributions

Please follow these steps to have your contribution considered by the maintainers:

1. Follow all instructions in [the template](PULL_REQUEST_TEMPLATE.md)
2. Follow the [styleguides](#styleguides)
3. After you submit your pull request, verify that all status checks and tests are passing

While the prerequisites above must be satisfied prior to having your pull request reviewed, the reviewer(s) may ask you to complete additional design work, tests, or other changes before your pull request can be ultimately accepted.

## Styleguides

@TODO

[slack]: https://slack.rise.vision
