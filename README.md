# utilities

This repo contains the source for a basic utility website containing basic tools and utilities provided in the most simple way. All tools are designed to run client side only with no external processing to make them safe to use for sensitive data when required - guaranteed. 

## Contents

* [SQL Formatter](#sql-formatter)
* [JSON Formatter](#json-formatter)
* [Time Zone Converter](#time-zone-converter)

## SQL Formatter

<p align="center">
  <img width="460" src="https://user-images.githubusercontent.com/9435503/175794234-19082e84-272f-4c00-951f-310d46e5ebb6.png"/>
</p>

This uses [sql-formatter](https://github.com/sql-formatter-org/sql-formatter) to produce well formatted SQL statements and highlights them with [highlightjs](https://highlightjs.org/). When `Format on paste` is ticked the field will automatically format code pasted into it, otherwise you can press the 'Format' button at any time to format the contents

## JSON Formatter

<p align="center">
  <img width="460" src="https://user-images.githubusercontent.com/9435503/175794256-a2401020-485a-4cc1-86d2-1bd874b8e06a.png"/>
</p>

This uses [JSONFormat](https://github.com/phoboslab/json-format/) to produce well formatted JSON statements and highlights them with [highlightjs](https://highlightjs.org/). When `Format on paste` is ticked the field will automatically format code pasted into it, otherwise you can press the 'Format' button at any time to format the contents

## Time Zone Converter

<p align="center">
  <img width="460" src="https://user-images.githubusercontent.com/9435503/175794266-50c161ee-1900-4ee2-8e12-b0ee7df6518a.png"/>
</p>

Converts between different time zones, you can convert from either side. Times should be in the format `HH:mm:ss` or `HH:mm`. When you change time zone or type a time matching this format in either box, it will show the updated time on the other side. This uses [luxon](https://moment.github.io/luxon) with [Intl.DateTimeFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat) to perform the localisation. The list of available time zones is derived from the [tz database](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones)
