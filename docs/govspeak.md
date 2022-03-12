---
layout: page
title: Govspeak Markdown
tags:
- getting-started
- search-index
---

## Callouts

### Information callouts

```markdown
^This is an information callout^
```

creates a callout with an info (i) icon.

^This is an information callout^

### Warning callouts

```markdown
%This is a warning callout%
```

creates a callout with a warning or alert (!) icon

%This is a warning callout%

### Example callout

```markdown
$E
**Example**\
This is an indented example block.\
It may span multiple lines, [contain links](#).\

It may even span multiple paragraphs.
$E
```

creates an example box

$E
**Example**\
This is an indented example block.\
It may span multiple lines, [contain links](#).

It may even span multiple paragraphs.
$E

## Points of Contact

### Contact

```markdown
$C
**Student Finance England**\
**Telephone:** 0845 300 50 90\
**Minicom:** 0845 604 44 34
$C
```

creates a contact box

$C
**Student Finance England**\
**Telephone:** 0845 300 50 90\
**Minicom:** 0845 604 44 34
$C

### Address

```markdown
$A
Hercules House\
Hercules Road\
London SE1 7DU
$A
```

creates an address box

$A
Hercules House\
Hercules Road\
London SE1 7DU
$A

## Downloads

```markdown
$D
[An example form download link](http://example.com/ "Example form")

Something about this form download
$D
```

creates a file download box

$D
[An example form download link](http://example.com/ "Example form")

Something about this form download
$D

## Information

```markdown
$I
This is information
$I
```

creates an information box

$I
This is information
$I

## Call to action

```markdown
$CTA
This is a call to action
$CTA
```

creates an additional information box

$CTA
This is a call to action
$CTA

## Steps

Steps can be created similar to an ordered list:

```markdown
s1. numbers
s2. to the start
s3. of your list
```

s1. numbers
s2. to the start
s3. of your list

Note that steps need an extra line break after the final step (ie. two full blank lines) or other markdown directly afterwards won't work. If you have a subhead after - add a line break after this.

## Button

An accessible way to add button links into content, that can also allow cross domain tracking with [Google Analytics](https://support.google.com/analytics/answer/7372977?hl=en)

This button component uses the component from the [components gem](https://components.publishing.service.gov.uk/component-guide/button) for use in govspeak.

You must use the [link](https://daringfireball.net/projects/markdown/syntax#link) syntax within the button tags.

### Examples

To get the most basic button.

```markdown
{button}[Continue](https://gov.uk/random){/button}
```

which outputs

{button}[Continue](https://gov.uk/random){/button}

To turn a button into a ['Start now' button](https://www.gov.uk/service-manual/design/start-pages#start-page-elements), you can pass `start` to the button tag.

```markdown
{button start}[Start Now](https://gov.uk/random){/button}
```

which outputs

{button start}[Start Now](https://gov.uk/random){/button}

### Statistic headline

Used in HTML publications.

Statistic headlines highlight important numbers in content. Displays a statistic as a large number with a description. The statistic and description must make sense when read aloud. The important number must be wrapped in `**`.

```markdown
{stat-headline}
*£6bn* Total Departmental Expenditure Limit (DEL) in financial year 2015 to 2016
{/stat-headline}
```

Creates the following:

{stat-headline}
*£6bn* Total Departmental Expenditure Limit (DEL) in financial year 2015 to 2016
{/stat-headline}
