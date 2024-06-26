#!/bin/bash
set -e
service mysql start
mysql < database.sql
service mysql stop
