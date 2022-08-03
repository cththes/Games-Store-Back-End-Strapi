'use strict';

/**
 * docker-collection router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::docker-collection.docker-collection');
