package com.delphix.resumemasking

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
class ResumeMaskingApplication

fun main(args: Array<String>) {
	runApplication<ResumeMaskingApplication>(*args)
}
