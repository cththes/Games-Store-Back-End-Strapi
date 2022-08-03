'use strict';

/**
 * docker-collection service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::docker-collection.docker-collection');
